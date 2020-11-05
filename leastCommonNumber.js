// Phil Tenteromano

// least common number of 3 arrays
// the arrays are sorted in ascending order
// leveraging this, check each index, if not the same value
// increment the lowest value, check, repeat

// O(n) solution (worst case n is largest length of arrays)
let findLeastCommonNumber = function (a, b, c) {
  let i = 0; // a
  let j = 0; // b
  let k = 0; // c

  while (i < a.length && j < b.length && k < c.length) {
    console.log(a[i], b[j], c[k]);

    // check for lowest
    if (a[i] === b[j] && b[j] === c[k]) return a[i];

    // increment lowest index
    if (a[i] <= b[j] && a[i] <= c[k]) i++;
    else if (b[j] <= a[i] && b[j] <= c[k]) j++;
    else if (c[k] <= a[i] && c[k] <= b[j]) k++;
  }

  return "No common value found";
};

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = [6, 8, 9, 12, 14];
const a3 = [-4, -1, 0, 9, 11, 22];

// LCN = 9
console.log(findLeastCommonNumber(a1, a2, a3));
