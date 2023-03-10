const L = require('./index');
const List = L.LinkedList;
const Node = L.Node;

test('The Linked List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('A Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has the properties "data" and "next"', () => {
    const node = new Node('a', 'b');

    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('Insert First', () => {
  test('appends a node to the start of the Linked List', () => {
    const l = new List();

    l.insertFirst(1);
    expect(l.head.data).toEqual(1);

    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
});

describe('Size', () => {
  test('returns the number of Nodes in the Linked List', () => {
    const l = new List();

    expect(l.size()).toEqual(0);

    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);

    expect(l.size()).toEqual(4);
  });
});

describe('Get First', () => {
  test("returns the first Node's value", () => {
    const l = new List();

    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);

    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe('Get Last', () => {
  test('returns the last Node', () => {
    const l = new List();

    l.insertFirst(2);
    expect(l.getLast()).toEqual({ data: 2, next: null });

    l.insertFirst(1);
    expect(l.getLast()).toEqual({ data: 2, next: null });
  });
});

describe('Clear', () => {
  test('removes all Nodes from the Linked List', () => {
    const l = new List();

    expect(l.size()).toEqual(0);

    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);

    expect(l.size()).toEqual(4);

    l.clear();

    expect(l.size()).toEqual(0);
  });
});

describe('Remove First', () => {
  test('removes the first Node when the Linked List has a size of one', () => {
    const l = new List();

    l.insertFirst('a');
    l.removeFirst();

    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test('removes the first Node when the list has a size of three', () => {
    const l = new List();

    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');

    l.removeFirst();

    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual('b');

    l.removeFirst();

    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual('c');
  });
});

describe('Remove Last', () => {
  test('removes the last Node when the Linked List is empty', () => {
    const l = new List();

    expect(() => {
      l.removeLast();
    }).not.toThrow();
  });

  test('removes the last Node when the Linked List has a length of 1', () => {
    const l = new List();

    l.insertFirst('a');
    l.removeLast();

    expect(l.head).toEqual(null);
  });

  test('removes the last Node when the Linked List has a length of 2', () => {
    const l = new List();

    l.insertFirst('b');
    l.insertFirst('a');

    l.removeLast();

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual('a');
  });

  test('removes the last Node when the Linked List has a length of 3', () => {
    const l = new List();

    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');

    l.removeLast();

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('Insert Last', () => {
  test('adds a Node to the end of the Linked List', () => {
    const l = new List();

    l.insertFirst('a');
    l.insertLast('b');

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});

describe('Get At', () => {
  test('returns the Node at the specified index', () => {
    const l = new List();

    expect(l.getAt(10)).toEqual(null);

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});

describe('Remove At', () => {
  test('does not throw an error on an empty Linked List', () => {
    const l = new List();

    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  test('does not throw an error on an index that is out of bounds', () => {
    const l = new List();

    expect(() => {
      const l = new List();

      l.insertFirst('a');
      l.removeAt(1);
    }).not.toThrow();
  });

  test('deletes the first Node', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).toEqual(1);

    l.removeAt(0);

    expect(l.getAt(0).data).toEqual(2);
  });

  test('deletes the Node at the specified index', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(1).data).toEqual(2);

    l.removeAt(1);

    expect(l.getAt(1).data).toEqual(3);
  });

  test('deletes the last Node properly', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(3).data).toEqual(4);

    l.removeAt(3);

    expect(l.getAt(3)).toEqual(null);
  });
});

describe('Insert At', () => {
  test('adds a new Node with data at the head when the Linked List is empty', () => {
    const l = new List();

    l.insertAt('hi', 0);

    expect(l.getFirst().data).toEqual('hi');
  });

  test('adds a new Node with data at the head when the Linked List has Nodes already', () => {
    const l = new List();

    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);

    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });

  test('adds a new Node with data at a middle index', () => {
    const l = new List();

    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });

  test('adds a new Node with data as the last Node', () => {
    const l = new List();

    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 2);

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });

  test('adds a new Node as the last Node when the specified index is out of bounds', () => {
    const l = new List();

    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 30);

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
});

describe('For Each', () => {
  test('applies a specified function to each Node in the Linked List', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    l.forEach(node => {
      node.data += 10;
    });

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });
});

describe('for...of loops', () => {
  test('works with the Linked List', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    for (let node of l) {
      node.data += 10;
    }

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });

  test('for...of works with an empty Linked List', () => {
    const l = new List();
    
    expect(() => {
      for (let node of l) {
      }
    }).not.toThrow();
  });
});