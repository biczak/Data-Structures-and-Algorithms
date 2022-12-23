// Node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // Add a new Node to the Tree
  insert(data) {
    // If the value is less than the current Node's, and there is already a left child, repeat this function using the left child
    if (data < this.data && this.left) {
      this.left.insert(data);
      // If the value is less than the current Node's and there is no left child, add a new Node as the left child
    } else if (data < this.data) {
      this.left = new Node(data);
      // If the value is greater than the current Node's, and there is already a right child, repeat this function using the left child
    } else if (data > this.data && this.right) {
      this.right.insert(data);
      // If the value is greater than the current Node's and there is no right child, add a new Node as the right child
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  // Check if a specific value is present in the Tree
  contains(data) {
    // If the value matches, return the current Node
    if (this.data === data) {
      return this;
    }

    // If the value is greater than the current Node's and there is a right child, repeat this function using the right child
    if (this.data < data && this.right) {
      return this.right.contains(data);
      // If the value is less than the current Node's and there is a left child, repeat this function using the left child
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    // If the value is never found, return null
    return null;
  }
}

module.exports = Node;