// Tree Node
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // Add Child
  add(data) {
    this.children.push(new Node(data));
  }

  // Remove Child
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
};

// Tree
class Tree {
  constructor() {
    this.root = null;
  }

  // Breadth-First Traversal
  breadthFirst(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  // Depth-First Traversal
  depthFirst(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
};

module.exports = { Tree, Node };