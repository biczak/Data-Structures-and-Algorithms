// Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the beginning of the Linked List
  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    
    this.head = new Node(data, this.head);
  }

  // Add a Node as the last Node of the Linked List
  insertLast(data) {
    const last = this.getLast();

    // If the Linked List already contains at least one Node
    if (last) {
      last.next = new Node(data);
      // If the Linked List is empty, add a Node as the head
    } else {
      this.head = new Node(data);
    }
  }

  // Add a Node a the specified index
  insertAt(data, index) {
    // If the Linked List is empty, add a Node as the head
    if (!this.head) {
      this.insertFirst(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  // Return the number of Nodes in the Linked List
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  // Return the first Node of the Linked List
  getFirst() {
    return this.head;
  }

  // Return the last Node of the Linked List
  getLast() {
    // If the Linked List is empty, return null
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // Return the Node at the specified index
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    // If there is no Node at the specified index, return null
    return null;
  }

  // Remove all Nodes from the Linked List
  clear() {
    this.head = null;
  }

  // Remove only the first Node of the Linked List and shift the remaining appropriately
  removeFirst() {
    // If the Linked List is already empty, nothing needs to be done
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // Remove the last Node of the Linked List
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  // Remove the Node at the specified index
  removeAt(index) {
    // If the Linked List is empty, nothing needs to be done
    if (!this.head) {
      return;
    }

    // If the specified index is the first index, remove the head and shift any remaining Nodes
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  // Perform a function on each Node in the Linked List
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
};

module.exports = { Node, LinkedList };