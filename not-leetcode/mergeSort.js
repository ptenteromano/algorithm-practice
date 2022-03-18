// Ascending MergeSort
// Alias
const mergeSort = (arr) => {
  return splitArr(arr);
};

// Break down arrays in halves
// Function named semantically
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

// O(2n) sorting algorithm === O(n)
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
   * Also note 2n is the size of the entire array (left + right)
   */
  while (l < left.length || r < right.length) {
    const [val, incLeft] = comparisonHelper(left[l], right[r]);
    result.push(val);

    incLeft ? l++ : r++;
  }

  return result;
};

const a = [3, 4, 1, -5, 9, 2]; // 6
const b = [3, 2, 1]; // 3
const c = [-3, 20, 1, 12]; // 3

console.log(mergeSort(a));
console.log(mergeSort(b));
console.log(mergeSort(c));
/*
 * O(n log n) runtime
 * Because the halving of an array is a logarithm
 * this is where the Log n comes from
 * The n is the sorting on each of the log n's
 *
 * This, "n * log n" runtime
 */

/*
 * Helper to compare values
 * Checks for undefined to error check odd-length arrays
 *
 * Return [value to be appended, true for left, false for right]
 *
 * Defined as a 'function' to enable Hoisting
 */
function comparisonHelper(a, b) {
  if (!b) return [a, true];
  if (!a) return [b, false];

  if (a < b) return [a, true];

  return [b, false];
}
