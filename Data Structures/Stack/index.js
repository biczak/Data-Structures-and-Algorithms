// Stack - LIFO Data Structure
class Stack {
  constructor() {
    this.data = [];
  }

  // Add record to top of Stack (end of array)
  push(record) {
    this.data.push(record);
  }

  // Remove record from top of Stack (end of array)
  pop() {
    return this.data.pop();
  }

  // View record on top of Stack (end of array)
  peek() {
    return this.data[this.data.length - 1];
  }
};

module.exports = Stack;