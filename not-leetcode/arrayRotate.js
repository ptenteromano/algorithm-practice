// Phil Tenteromano
// Array rotation

// left array rotation
// given array and number of rotations, shift indices to left
// ex: [1,2,3,4,5,6], rotate: 4
// output: [5,6,1,2,3,4]

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Method #1 - take '0..d' values and 'd..length-1' values and concat
function leftArrayRotation(a, d) {
  const front = [];
  const back = [];

  d = d % a.length;

  for (let i = 0; i < d; i++) {
    back.push(a[i]);
  }

  for (let i = d; i < a.length; i++) {
    front.push(a[i]);
  }

  return front.concat(back);
}

// console.log(leftArrayRotation(a, 1));

// Method #2 - shift array one by one
function leftArrayRotation2(a, d) {
  let temp;
  const b = a.slice();
  let i = 0;

  while (i < d) {
    temp = b[0];
    for (let k = 1; k < b.length; k++) {
      b[k - 1] = b[k];
    }
    b[b.length - 1] = temp;
    i++;
  }

  return b;
}

// console.log(leftArrayRotation2(a, 5));

function rightArrayRotation(a, d) {
  d = d % a.length;

  fromBack = a.length - d;

  const back = a.slice(fromBack);
  const front = a.slice(0, fromBack);

  return back.concat(front);
}

console.log(rightArrayRotation(arr, 3));

// Right array rotation using method 2 to shift one by one
function rightArrayRotation2(a, d) {
  const b = a.slice();
  let i = 0;

  d = d % a.length;

  while (i < d) {
    b[0] = a[a.length - 1];
    for (let k = 0; k < a.length - 1; k++) {
      b[k + 1] = a[k];
    }
    i++;
    a = b.slice();
  }

  return b;
}

console.log(rightArrayRotation2(arr, 3));

// juggling algorithm using GCD coming soon
// const gcd = require("./gcd").gcd;
// console.log(gcd(3, 18)); // 3
