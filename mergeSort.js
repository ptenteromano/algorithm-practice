// Ascending MergeSort
const mergeSort = (arr) => {
  return splitArr(arr);
};

// Break down arrays in halves
const splitArr = (arr) => {
  // Base Case
  if (arr.length <= 1) return arr;

  // Split array into two
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursive Case, but merge them
  return merge(splitArr(leftHalf), splitArr(rightHalf));
};

// O(2n) sorting algorithm
// Only possible when there are two sorted arrays
// Note: this is the assumption that makes mergeSort fast!
const merge = (left, right) => {
  const result = [];
  let l = 0; // left index marker
  let r = 0; // right index marker

  /*
   * Since both arrays are sorted, we only have do O(2n) comparisons
   * How? We give a left and right index and move each along, always adding
   * O(2n) comparisons is much much better than any other kind of sorting
  */
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      // Store and move left index up
      result.push(left[l]);
      l++;
    } else {
      // Store and move right index up
      result.push(right[r]);
      r++;
    }
  }

  // There should be a leftover idx on odd-number splits
  if (left[l]) result.push(left[l]);
  if (right[r]) result.push(right[r]);

  return result;
};

const a = [3, 4, 1, -5, 9, 2]; // 6
const b = [3, 2, 1]; // 3

console.log(mergeSort(a));
console.log(mergeSort(b));
