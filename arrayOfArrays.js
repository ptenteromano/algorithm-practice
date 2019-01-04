// return a new 1d array with all items from 2d array

function joinArrayOfArrays(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }

  return result;
}

const x = [[1, 4], [true, false], ["x", "y"]];

console.log(joinArrayOfArrays(x));

// bonus: use of reduce

function sum(a, b) {
  return a + b;
}

const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(y.reduce(sum, 0));
console.log(y);
