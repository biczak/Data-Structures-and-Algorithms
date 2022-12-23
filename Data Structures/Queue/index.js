// Queue - FIFO Data Structure
class Queue {
  constructor() {
    this.data = [];
  }

  // Add record to end of Queue (front of array)
  add(record) {
    this.data.unshift(record);
  }

  // Remove record from front of Queue (end of array)
  remove() {
    return this.data.pop();
  }
};

module.exports = Queue;