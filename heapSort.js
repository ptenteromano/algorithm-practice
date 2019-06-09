// binary heap sort algorithm

const unsorted = [1, 6, 2, 7, 3, 5, 4, 8];

function heapSort(arr) {}

class HeapSort {
  constructor(arr) {
    this.unsort = [...arr];
    this.heap = arr;
    this.sorted = null;
    this.parentIndex = i => (i - 1) / 2;
    // this.ithLeftChild = (i, arr) => arr[2 * i + 1];
    // this.ithRightChild = (i, arr) => arr[2 * i + 2];
  }
  sort() {
    while (this.heap.length > 0) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let index = 0;

    while (index < this.heap.length - 1) {
      let child = this.heap[index];
      const parentIndex = this.parentIndex(index);
      const parent = this.heap[parentIndex];

      if (child < parent) {
        console.log(child, parent);
        this.heap[index] = parent;
        this.heap[parentIndex] = child;
      }
      --index;
    }
    console.log(this.swapAndExtract()); //, this.heap);
  }

  swapAndExtract() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    return min;
  }
}

const a = new HeapSort(unsorted);

console.log(a.sort());

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Heap {
//   constructor() {
//     this.root = null;
//   }

//   // Insert node - either init at root or find to place a new one
//   insert(data) {
//     let newNode = new Node(data);

//     if (this.root === null) this.root = newNode;
//     else this.insertNewNode(this.root, newNode);
//   }

//   insertNewNode(node, newNode) {
//     if (node.left === null) node.left = newNode;
//     else if (node.right === null) node.right = newNode;

//   }
// }
