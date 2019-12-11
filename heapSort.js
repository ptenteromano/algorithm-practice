// Program for heap sort in ascending order
// 6/10/2019

// run this with node
// `node heapSort.js`

// The smaller testing array
const unsorted = [10, 7, 3, 6, 1, 4, 2, 5, 8, 9];

// Binary heap sort algorithm
class HeapSort {
  constructor(arr) {
    this.heap = [...arr];
    this.placeHolder = [...arr];

    this.parentIndex = child => Math.floor((child - 1) / 2);
    this.leftChildIndex = parent => 2 * parent + 1;
    this.rightChildIndex = parent => 2 * parent + 2;
  }

  // Public Methods
  printSortedArray() {
    console.log(this._setSortedArray());
  }

  printMinHeap() {
    this._setMinHeap();
    console.log(this.heap);
  }

  // Private or 'hidden' methods
  // ----------------------------------
  // Converts into Complete Min Heap
  // Pops root off, repeats
  _setSortedArray() {
    const sorted = [];

    while (this.heap.length > 1) {
      this._setMinHeap();
      sorted.push(this.heap[0]);

      this.heap[0] = this.heap.pop();
    }

    sorted.push(this.heap[0]);

    this.heap = [...this.placeHolder];

    return sorted;
  }

  // Start from the bottom and heap up, then heap down
  // End result is a Complete Min Heap
  _setMinHeap() {
    this._heapBottomUp();
    this._heapTopDown();
  }

  // Smaller values need to be heaped up towards to the top
  _heapBottomUp() {
    let i = this.heap.length - 1;
    while (i >= 0) {
      this._heapifySubTree(i);
      --i;
    }
  }

  // Higher values need to be heaped down to their respective positions
  _heapTopDown() {
    let i = 0;
    while (i < this.heap.length) {
      this._heapifySubTree(i);
      ++i;
    }
  }

  // This looks at a parent node and it's two children (no matter the index)
  // It will swap the parent with the minimum value of the 3
  // Done many enough times, this will create Complete Min Heap
  _heapifySubTree(index) {
    const parentIndex = this.parentIndex(index);
    const lcIndex = this.leftChildIndex(parentIndex);
    const rcIndex = this.rightChildIndex(parentIndex);

    const p = this.heap[parentIndex];

    if (p !== undefined) {
      const l = this.heap[lcIndex];
      const r = this.heap[rcIndex];

      if (l < p && (l <= r || r === undefined)) {
        const tmp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[lcIndex];
        this.heap[lcIndex] = tmp;
      } else if (r < p && r <= l) {
        const tmp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[rcIndex];
        this.heap[rcIndex] = tmp;
      }
    }
  }
}

const a = new HeapSort(unsorted);

// console.log("Complete Minimum Heap");
// a.printMinHeap();

console.log("\nFully Sorted Array in O(nlogn) Time");
a.printSortedArray();
