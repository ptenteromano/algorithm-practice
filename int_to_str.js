// given an integer, write a function that returns it as string
// ex: 355 to "355"

// primative types are passed by value
function intToString(num) {
  let result = "";
  const strArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numArr = [];

  if (num < 10 && num >= 0) return strArr[num];

  if (num < 0) {
    result += "-";
    num *= -1;
  }

  while (num > 0) {
    let i = num % 10;
    num = Math.floor(num / 10);

    numArr.push(strArr[i]);
  }

  for (let i = numArr.length - 1; i >= 0; i--) result += strArr[numArr[i]];

  return result;
}

let x = 34;
console.log(x, typeof x);
let strX = intToString(x);
console.log(strX, typeof strX);
