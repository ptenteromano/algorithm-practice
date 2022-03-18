// Factorial N represented as prime factorization
// Helper functions using `num` as arg

// Speedy prime func (num^1/2)
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// no need to re-check prime
// we only pass in composites
const primeFactorComposite = (num, factorsArr = []) => {
  while (true) {
    // easiest and best case - splitting with '2'
    if (num % 2 === 0) {
      factorsArr.push(2);
      num /= 2;
    } else {
      // find the next-smallest prime factor
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (isPrime(i) && num % i === 0) {
          factorsArr.push(i);
          num /= i;
          break;
        }
      }
    }
    // we're done when the last remaining number is prime
    if (isPrime(num)) {
      factorsArr.push(num);
      return factorsArr;
    }
  }
};

const factorialPrimeFactors = (n, factorsArr = []) => {
  // base case is the smallest prime number
  if (n === 2) {
    factorsArr.push(2);
    return factorsArr.sort((a, b) => a > b);
  } else if (isPrime(n)) {
    // if a prime but not 2, we want it
    factorsArr.push(n);
  } else {
    // composite? prime-factorize it
    factorsArr = primeFactorComposite(n, factorsArr);
  }

  // recurse until done
  return factorialPrimeFactors(n - 1, factorsArr);
};

// supplemental output string
const fixOutput = (arr) => {
  let outputString = "";

  const unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

  for (let i = 0; i < unique.length; i++) {
    const num = unique[i];
    const countOfNum = arr.reduce((n, val) => n + (val === num), 0);

    if (countOfNum === 1) {
      outputString += num.toString();
    } else {
      outputString += num.toString() + "^" + countOfNum.toString();
    }
    if (i + 1 !== unique.length) {
      outputString += " * ";
    }
  }

  return outputString;
};

// test/proof helper
const factorial = (n) => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

// PROOF - change this number (too large, too long)
const testNum = 12;

// timer
console.time("function call");
result = factorialPrimeFactors(testNum);
console.timeEnd("function call");

a = result.reduce((a, b) => a * b);
b = factorial(testNum);
c = primeFactorComposite(b).reduce((a, b) => a * b);

console.log(`\nTesting ${testNum}`);
console.log("Factorial as Prime Factors:", result);
console.log("Factorial product:", b);
console.log((a === b) === (b === c)); // true

console.log("\n", fixOutput(factorialPrimeFactors(testNum)));
