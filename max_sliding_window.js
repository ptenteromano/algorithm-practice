let max_sliding_window = function(arr, window_size) {
  if (window_size > arr.length) {
    return "Window exceeds List Size";
  }

  let result = [];
  let list_ = [];

  // finding max of first window in array
  // storing the INDEX of the max
  for (let i = 0; i < window_size; i++) {
    while(list_.length > 0 && arr[i] >= arr[list_[list_.length - 1]]) {
      list_.pop();
    }
    list_.push(i);
  }

  return list_;


};


let a = [3, 5, -2, 1, 0, 50];
let window = 4;

let x = max_sliding_window(a, window);

console.log(x);
