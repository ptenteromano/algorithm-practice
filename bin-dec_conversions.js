// Phil Tenteromano

// using two conversion functions, change a base 10 number to binary and back again

// any number we can think of
let decNum = 302;

// base 10 to binary algorithm
function decToBinary(num) {
  // array to store 0's and 1's
  let binArr = [];
  let zeroOrOne;

  while (num > 0) {
    // remainder will either be 0 or 1, that's our bin num
    zeroOrOne = num % 2;

    // continuously split num in half, take Floor
    num = Math.floor(num / 2);

    // places the remainder in the front (since left is most signifcant)
    binArr.unshift(zeroOrOne);
  }

  // join the array and parse into integer
  return parseInt(binArr.join(""));
}

const convert1 = decToBinary(decNum);
console.log(`Decimal Number: ${decNum} converted to ${convert1}`);
console.log("Checker: ", parseInt(convert1, 2));

console.log("--------------------------------");

// ----------------------------------------------------------------

// binary to base 10 algorithm
function binToDec(num) {
  // convert to string for use as an iteratable
  num = num.toString();

  let result = 0; // our decimal return value
  const length = num.length - 1; // 0-index based length
  let index = length; // start from right (least significant)
  let zeroOrOne, power; // binary and power vars

  while (index >= 0) {
    // convert single digit back to integer
    zeroOrOne = parseInt(num[index], 10);

    // Index starts on the right and will decrement, while length is a constant
    // Causing power to get larger as it moves to the left
    power = length - index;

    // 1 or 0 x (2^pow)
    result += zeroOrOne * (2 ** power);

    index--;
  }

  return result;
}

const test = 1011
const convert2 = binToDec(test);
console.log(`Binary Number: ${test} converted to ${convert2}`);
console.log("Checker: ", parseInt(convert2, 10));
