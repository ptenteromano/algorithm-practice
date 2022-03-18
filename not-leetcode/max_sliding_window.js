// Philip Tenteromano
// Sliding Window Algorithm
// O(n) Linear runtime
// O(w) memory complexity (w == window size)

// window size in array, store max in the window as it slides to end

let max_sliding_window = function (arr, window_size) {
  if (window_size > arr.length) {
    return "Window exceeds List Size";
  }

  let result = [];
  let list_ = [];

  // finding max of first window in array
  // storing the INDEX of the max -- it stays at list_[0]
  for (let i = 0; i < window_size; i++) {
    // compares current array index with last elements in window list
    // removes if current is larger
    while (list_.length > 0 && arr[i] >= arr[list_[list_.length - 1]]) {
      list_.pop();
    }
    list_.push(i);
  }

  result.push(arr[list_[0]]);

  // clear trailing smaller numbers and
  // shift through the rest of the array with the window
  for (let i = window_size; i < arr.length; i++) {
    while (list_.length > 0 && arr[i] >= arr[list_[list_.length - 1]]) {
      list_.pop();
    }

    // (i - window_size) gives the index of 'list_' head!
    if (list_.length > 0 && list_[0] <= i - window_size) {
      // shift method is like pop but on the head
      list_.shift();
    }

    list_.push(i);
    // remember list_ only holds the index of the numbers
    result.push(arr[list_[0]]);
  }

  return result;
};

let a = [3, 5, -2, 8, -3, 12];

console.log(max_sliding_window(a, 2));
console.log("-----------------");
console.log(max_sliding_window(a, 3));
console.log("-----------------");
console.log(max_sliding_window(a, 4));
console.log("-----------------");
console.log(max_sliding_window(a, 5));
