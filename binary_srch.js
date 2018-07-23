// a is sorted array
const binarySearch = (a, key, low, high) => {
  if (low < high) { return -1; }   
  const mid = (high / 2) + 1;

  if (key === a[mid]) {
    return mid;
  }
  if (key > a[mid]) {
    return binarySearch(a, key, (mid + 1), high);
  }
  if (key < a[mid]) {
    return binarySearch(a, key, low, (mid - 1));
  }
  return -1;
};

const array = [1, 50, 80, 101, 300, 2018];
const find = 80;

const a = binarySearch(array, find, 0, array.length);
console.log(a);
