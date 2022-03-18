/**
 * Generic hashing function
 *
 * @param {String} string
 * @param {Number} tableLength
 *
 * @return {Number} the idx to be used in the table
 */

const hashStringToInt = (string = "", tableLength) => {
  const hashingPrime = 13;
  let hash = 0;

  for (const idx in string.length) {
    hash = (hashingPrime * hash + string.charCodeAt(idx)) % tableLength;
  }

  return hash;
};

module.exports = hashStringToInt;
