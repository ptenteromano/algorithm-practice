// integer to string (obviously without using built-in or coercion)
// given an integer, write a function that returns it as string
// ex: 355 to "355"

function intToString(num) {
  let result = "";
  const strArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numArr = [];

  if (num < 10 && num >= 0) return strArr[num];

  // properly handle negative input
  if (num < 0) {
    result += "-";
    num *= -1;
  }

  // deconstruct number from smallest to largest digit (right to left)
  while (num > 0) {
    let i = num % 10;
    num = Math.floor(num / 10);

    numArr.push(strArr[i]);
  }

  // concat to result (highest index is most significant digit)
  // built in methods:
  result += numArr.reverse().join("");

  return result;
}

let x = -3433;
console.log(x, typeof x);
let strX = intToString(x);
console.log(strX, typeof strX);

// without built-in .reverse().join(""):
// we can use a manual for loop instead of built in methods to concat to result:
// for (let i = numArr.length - 1; i >= 0; i--) result += strArr[numArr[i]];
