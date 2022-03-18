// Return whether, given two integers, one is positive
// and the other is negative

function posNegIntegers(a, b) {
  numA = parseFloat(a, 10);
  numB = parseFloat(b, 10);

  if (isNaN(numA) || isNaN(numB)) return "Need numbers";
  if (numA % 1 !== 0 || numB % 1 !== 0) return "Need integers";

  return (numA > 0 && numB < 0) || (numA < 0 && numB > 0);
}

console.log(posNegIntegers("hi", 2)); // "Need Numbers"
console.log(posNegIntegers("5.5", 2)); // "Need Integers"
console.log(posNegIntegers("5", 2)); // false
console.log(posNegIntegers("-5", 2)); // true
console.log(posNegIntegers(5, -2)); // true
