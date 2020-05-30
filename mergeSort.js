const mergeSort = (arr) => {
  return splitArr(arr);
};

const splitArr = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  return merge(splitArr(leftHalf), splitArr(rightHalf));
};

const merge = (left, right) => {
  const result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
};

const a = [3, 4, 1, -5, 9, 2]; // 6
const b = [3, 2, 1]; // 3

console.log(mergeSort(a));
console.log(mergeSort(b));
