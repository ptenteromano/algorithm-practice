// Phil Tenteromano

// base 10 to binary algorithm

let decNum = 302;

function decToBinary(num) {
  let binArr = [];

  while (num > 0) {
    let r = num % 2;
    num = Math.floor(num / 2);
    binArr.push(r);
  }

  return binArr.reverse().join("");
}

console.log(decToBinary(decNum));
console.log(decNum);

// binary to base 10 algorithm

// need to fix
function binToDec(num) {
  num = num
    .toString()
    .split("")
    .reverse()
    .join("");

  let result = 0;

  let index = 0;
  let curr;
  while (index < num.length) {
    curr = parseInt(num[index], 10);
    console.log(curr);
    result += Math.pow(curr, index);
    index++;
  }

  return result;
}

let binNum = 110; // 6
console.log(binToDec(binNum));
