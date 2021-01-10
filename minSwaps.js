function minimumSwaps(arr) {
  const size = arr.length;

  let count = 0;
  let temp;

  for (idx = 0; idx < size; idx++) {
    if (arr[idx] !== idx + 1) {
      temp = arr[idx];
      arr[idx] = arr[arr[idx] - 1];
      arr[temp - 1] = temp;
      count++;
      idx--;
    }
  }
  return count;
}

const a = [3, 7, 6, 9, 1, 8, 10, 4, 2, 5];
const b = [4, 3, 1, 2];

console.log(minimumSwaps(a));
