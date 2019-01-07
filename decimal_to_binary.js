// Phil Tenteromano

// binary to base 10 algorithm

let num = 302;

function decToBinary(num) {
  let binArr = [];

  while (num > 0) {
    let r = num % 2;
    num = Math.floor(num / 2);
    binArr.push(r);
  }

  return binArr.reverse().join("");
}

console.log(decToBinary(num));
console.log(num);
