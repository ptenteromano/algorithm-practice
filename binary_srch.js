// a is sorted array
let binary_Search = function(a, key, low, high) {
  if (low < high) { return -1; }

  if (low === undefined || high === undefined) {
    low = 0;
    high = a.length - 1;
  }
  // low == mid + 1, high stays  
  let mid = (high / 2) + 1;

  if (key === a[mid]) { 
    return mid; 
  } else { 
    if (key > a[mid]) {
      return binary_search(a, key, (mid + 1), high);
    }
    if (key < a[mid]) {
      high = mid - 1;
      return binary_search(a, key, low, (mid - 1));
    }
  }
};

let array = [1, 50, 80, 101, 300, 2018];
let find = 80;

binary_Search(array, find);
console.log(binary_search);
