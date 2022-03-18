// Find area of rainfall inside the mountains

const max = Math.max;
const min = Math.min;

// O(n^2)
const trapBruteForce = function (height) {
  let area = 0;

  // Forward traversal
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    for (let k = i; k >= 0; k--) leftMax = max(leftMax, height[k]);

    for (let k = i; k < height.length; k++) rightMax = max(rightMax, height[k]);

    const areaInMiddle = min(leftMax, rightMax) - height[i];
    area += areaInMiddle;
  }

  return area;
};

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [0, 1, 0, 2, 1, 0];
// Output: 6

console.log("Brute force:", trapBruteForce(height));

// -------------------------------

// O(n)
const trapDynamic = (height) => {
  const size = height.length;
  const leftMaxArr = new Array(size);
  const rightMaxArr = new Array(size);
  leftMaxArr[0] = height[0];
  rightMaxArr[size - 1] = height[size - 1];

  // Creates only an "uphill array from left to right"
  for (let i = 1; i < height.length; i++) {
    leftMaxArr[i] = max(height[i], leftMaxArr[i - 1]);
  }

  // Creates only an "uphill array from right to left"
  for (let i = size - 2; i >= 0; i--) {
    rightMaxArr[i] = max(height[i], rightMaxArr[i + 1]);
  }

  let area = 0;
  // Uses both max arrays to get lake area
  for (let i = 0; i < size; i++) {
    area += min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }

  return area;
};

console.log("Dynamic:", trapDynamic(height));

// -------------------------------

const trapWithPointers = (height) => {
  let leftIdx = 0;
  let leftMax = height[leftIdx];
  let rightIdx = height.length - 1;
  let rightMax = height[rightIdx];
  let area = 0;

  // Left and right are heading towards each other
  while (leftIdx < rightIdx) {
    // Advance the left side
    if (height[leftIdx] < height[rightIdx]) {
      // Reassign the lefts maximum
      if (height[leftIdx] >= leftMax) leftMax = height[leftIdx];
      // Otherwise we're in a downslope, get the difference
      else area += leftMax - height[leftIdx];
      leftIdx++;
    // Advance the rightside
    } else {
      // Reassign the rights maximum
      if (height[rightIdx] >= rightMax) rightMax = height[rightIdx];
      // Otherwise we're in a downslope, get the difference
      else area += rightMax - height[rightIdx];
      rightIdx--;
    }
  }

  return area;
};

console.log("Pointers:", trapWithPointers(height));
