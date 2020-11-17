// Phil Tenteromano

// GCD algorithm in javascript

// gcd === 8
const num1 = 80;
const num2 = 24;

function gcd(a, b) {
  if (a === b) return a;

  // 'a' should be the larger number, this is a standardization
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let remainder;

  while (true) {
    remainder = a % b;
    // Shrink the values
    a = b;
    b = remainder;

    // no remainder means full-division, gcd found
    if (remainder === 0) return a;
  }
}

console.log(gcd(num1, num2));

module.exports = {
  gcd,
};
