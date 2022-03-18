# frozen_string_literal: true

require 'jwt'
require 'net/http'

# This class holds 2 methods: 'encode' and 'decode'.
# The 'encode' method is written just for testing purpose - I have other project
# where I use this method in my tests to generate a test JWT token and use it
# in further tests.
# The 'decode' method is actually what you need. It helps you to verify
# your Firebase ID token according to Firebase validation rules:
# https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
module Auth
  # Used to authenticate a Google Firebase Token from the client (surfoto)
  # Fetches Valid JWT public keys from Google, encodes the Token and verifies
  class FirebaseTokenVerifier
    FIREBASE_CREDENTIALS = ::Rails.application.credentials.firebase
    JWT_ALGORITHM = FIREBASE_CREDENTIALS[:jwt_algorithm].freeze
    APP_NAME = FIREBASE_CREDENTIALS[:app_name].freeze
    CACHE_KEY = 'firebase_public_keys_cache_key'
    GOOGLE_PUBLIC_KEY_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com'

    # Temp
    FBJWT = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwMDk1YmM2ZGM2ZDY3NzkxZDdkYTFlZWIxYTU1OWEzZDViMmM0ODYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoibWlhVGVudGVyb21hbm8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9zdXJmcy11cC1jZjc4Yy5hcHBzcG90LmNvbS9vL2F2YXRhcnMlMkZSeFhqWklGOEFnYTluQm5ra2FpbnFBYUlZSHYyLmpwZz9hbHQ9bWVkaWEmdG9rZW49NmVhOTdhOWQtYzVhYi00NGQwLTk3YzAtYTgwZDQ1ODQ1MTExIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3N1cmZzLXVwLWNmNzhjIiwiYXVkIjoic3VyZnMtdXAtY2Y3OGMiLCJhdXRoX3RpbWUiOjE2MzAzODI5MDksInVzZXJfaWQiOiJSeFhqWklGOEFnYTluQm5ra2FpbnFBYUlZSHYyIiwic3ViIjoiUnhYalpJRjhBZ2E5bkJua2thaW5xQWFJWUh2MiIsImlhdCI6MTYzMDQzMjc5MCwiZXhwIjoxNjMwNDM2MzkwLCJlbWFpbCI6Im1lQG1lLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtZUBtZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Q9avA3HltIRwlJBL2O5Qur06x1JapvUifiZIk-XrImUOZ1fuCEGVlLL12JwMFVL0K5oTEsoaSLpn6sfHEiVQVWQbAgrwglZqZrF9xDAKD574fX1qV3ss5wcXvBnBg_Lrfj5aa6Vm63gJwQa0CEOOkprpAw0adnr9t2-jfvQFIz34-nc0Noi1Rbp4CWUBeFVf4t4ukUMVxdUoewgv-w3adc5fRsnXX7tjCwPeJBEuKzHKBl4NtlBYGkbccAq-531Eg4fOZ5SEfUjHfC3nSQztHUJi-cYgdWDtbLe18MQadDfImwTXL61STL2StR23R7vVxfn7r8eC3aQnSL26q4A4XQ'

    ##
    # Now we decode JWT token and validate
    # Validation rules:
    # https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
    def self.decode_jwt_token(firebase_jwt_token = FBJWT)
      json_keys = get_public_keys

      options = custom_options
      options[:algorithm] = JWT_ALGORITHM unless json_keys.nil?
      public_key = json_key_to_cert(json_keys)

      begin
        retries ||= 0
        decoded_token = JWT.decode(firebase_jwt_token, public_key, !public_key.nil?, options)
      rescue JWT::ExpiredSignature
        # Handle Expiration Time Claim: bad 'exp'
        return nil, "Invalid access token. 'Expiration time' (exp) must be in the future."
      rescue JWT::InvalidIatError
        # Handle Issued At Claim: bad 'iat'
        return nil, "Invalid access token. 'Issued-at time' (iat) must be in the past."
      rescue JWT::InvalidAudError
        # Handle Audience Claim: bad 'aud'
        return nil, "Invalid access token. 'Audience' (aud) must be your Firebase project ID, the unique identifier for your Firebase project."
      rescue JWT::InvalidIssuerError
        # Handle Issuer Claim: bad 'iss'
        return nil, "Invalid access token. 'Issuer' (iss) Must be 'https://securetoken.google.com/<projectId>', where <projectId> is your Firebase project ID."
      rescue JWT::VerificationError
        retry if (retries += 1) < 3
        # Handle Signature verification fail
        return nil, 'Invalid access token. Signature verification failed.'
      end

      [decoded_token, nil]
    end

    ##
    # Get valid JWT public keys and save to cache
    #
    # Must correspond to one of the public keys listed at
    # https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com
    def self.get_public_keys
      valid_public_keys = ::Rails.cache.read(CACHE_KEY)

      return fetch_new_public_keys if valid_public_keys.nil?

      valid_public_keys
    end

    ##
    # If the cache misses, we ne need to hit google for the new valid public keys
    def self.fetch_new_public_keys
      ::Rails.logger.warn('Fetching new public keys!')

      uri = URI(GOOGLE_PUBLIC_KEY_URL)
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.path)
      response = https.request(req)
      raise "Something went wrong: can't obtain valid JWT public keys from Google." if response.code != '200'

      cache_new_keys(response)
    end

    ##
    # Uses the response to pull and cache the public keys
    def self.cache_new_keys(response)
      valid_public_keys = JSON.parse(response.body)

      cc = response['cache-control'] # format example: Cache-Control: public, max-age=24442, must-revalidate, no-transform
      max_age = cc[/max-age=(\d+?),/m, 1] # get something between 'max-age=' and ','
      p "#{cc}, #{max_age}"
      ::Rails.cache.write(CACHE_KEY, valid_public_keys, expires_in: max_age.to_i)

      valid_public_keys
    end

    ##
    # Transforms a JSON key response to a valid public key
    def self.json_key_to_cert(public_key)
      return nil if public_key.nil?

      OpenSSL::X509::Certificate.new(public_key.values[0]).public_key
    end

    ##
    # Options used to verify the key
    def self.custom_options
      {
        # verify_iat: true,
        verify_aud: true, aud: APP_NAME,
        verify_iss: true, iss: "https://securetoken.google.com/#{APP_NAME}"
      }
    end
  end
end
