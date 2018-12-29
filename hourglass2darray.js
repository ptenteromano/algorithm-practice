// Phil Tenteromano

// 2d array challenge from hackerrank
// get minimum hourglass sum from a 2d matrix

const row1 = [1, 1, 1, 0, 0, 0];
const row2 = [0, 1, 0, 0, 0, 0];
const row3 = [1, 1, 1, 0, 0, 0];
const row4 = [0, 0, 2, 4, 4, 0];
const row5 = [0, 0, 0, 2, 0, 0];
const row6 = [0, 0, 1, 2, 4, 0];

const twoDarr = [];

// initialize
let i = 1;
while (i <= 6) {
  switch (i) {
    case 1:
      twoDarr.push(row1);
      break;
    case 2:
      twoDarr.push(row2);
      break;
    case 3:
      twoDarr.push(row3);
      break;
    case 4:
      twoDarr.push(row4);
      break;
    case 5:
      twoDarr.push(row5);
      break;
    case 6:
      twoDarr.push(row6);
      break;
  }
  i++;
}

// algorithm
function getHourglasses(arr) {
  let max, current;
  let first = true;
  let n = arr.length - 2;

  // define an hourglass
  // [r][0..2]
  // [r + 1][1] 
  // [r + 2][0..2]
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      // calc hourglass
      current =
        arr[r][c] +
        arr[r][c + 1] +
        arr[r][c + 2] +
        arr[r + 1][c + 1] +
        arr[r + 2][c] +
        arr[r + 2][c + 1] +
        arr[r + 2][c + 2];
      // ensure current is a number, check for max
      if (current !== undefined) {
        if (max < current) {
          max = current;
          first = false;
        }
        else if (first) {
          max = current;
          first = false;
        }
      }
    }
  }
  return max;
}

console.log(getHourglasses(twoDarr));
