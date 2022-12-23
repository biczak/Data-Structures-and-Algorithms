const Queue = require('./index');

test('Queue is a class', () => expect(typeof Queue.prototype.constructor).toEqual('function'));

test('Records can be added to the Queue', () => {
  const q = new Queue();

  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('Records can be removed from the Queue', () => {
  const q = new Queue();

  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('FIFO order is preserved', () => {
  const q = new Queue();

  q.add(1);
  q.add(2);
  q.add(3);
  
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});