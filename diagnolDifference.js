// Diagnol Difference function
// Given a square matrix,
// Sum each diagnol(like an X)
// Return the difference of the diagnols

function diagonalDifference(arr) {
  let sum = 0;
  let sum2 = 0;
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
    sum2 += arr[i][j];
    j--;
  }

  return Math.abs(sum - sum2);
}

testArr = [
  [-1.5, 4.7, 1.2, 0.2],
  [-0.3, 3.2, 2.9, 0.9],
  [4.5, 3.1, -1.6, 3.1],
  [1.5, 2.8, 3.1, -4.0]
];

console.log(diagonalDifference(testArr));
