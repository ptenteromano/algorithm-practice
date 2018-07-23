// a is sorted array
let binarySearch = function (a, key, low, high) {
  if (high === undefined || low === undefined) {
    high = a.length;
    low = 0;
  }
  if (low > high) { return -1; }
  var mid = Math.floor(high / 2) + 1;

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

var array = [1, 50, 80, 101, 300, 2018];
var find = 80;


console.log(binarySearch(array, find));

