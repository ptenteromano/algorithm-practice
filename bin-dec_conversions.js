// Phil Tenteromano

// using two conversion functions, change a base 10 number to binary and back again

// any number we can think of
let decNum = 302;

// base 10 to binary algorithm
function decToBinary(num) {
  // array to store 0's and 1's
  let binArr = [];
  let r;

  // continuously split num in half
  // remainder will either be 0 or 1, that's our bin num
  while (num > 0) {
    r = num % 2;
    num = Math.floor(num / 2);
    binArr.unshift(r);
  }

  // join the array and parse into integer
  return parseInt(binArr.join(""));
}

const convert1 = decToBinary(decNum);
console.log(`Decimal Number: ${decNum} converted to ${convert1}`);

// binary to base 10 algorithm
function binToDec(num) {
  // convert to string for use as an iteratable
  num = num.toString();

  let result = 0; // our decimal return value
  const length = num.length - 1; // 0-index based length
  let index = length; // start from right (least significant)
  let curr, pow; // iteration and power vars

  while (index >= 0) {
    // convert single digit back to integer
    curr = parseInt(num[index], 10);
    // simple equation to get the power as index decrements
    pow = length - index;
    // 1 or 0 x (2^pow)
    result += curr * Math.pow(2, pow);

    index--;
  }

  return result;
}

const convert2 = binToDec(convert1);
console.log(`Binary Number: ${convert1} converted to ${convert2}`);
