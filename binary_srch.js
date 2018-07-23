// a is sorted array
let binarySearch = function (a, key, low, high) {
  if (high === undefined || low === undefined) {
    high = a.length - 1;
    low = 0;
  }

  if (low > high) { 
    return -1; 
  }

  var mid = Math.floor(high / 2);
  if (mid < low) {
    mid = low;
  } 

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

var array = [1, 50, 80, 101, 300, 2018, 2022, 2102];
var find = 201;

// expected read through all indices in order
for (let nums of array) {
  let a = binarySearch(array, nums);
  console.log("Found at index " + a);
  console.log("Number = " + array[a]);
  console.log("-------");
}
// expected to be -1
console.log(binarySearch(array, find));
