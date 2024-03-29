// Binary heap priorityQueue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift().val;
  }

  notEmpty() {
    return !!this.values.length;
  }
}

module.exports = PriorityQueue;
