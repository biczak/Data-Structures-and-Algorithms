const Stack = require('./index');

test('Stack is a class', () => expect(typeof Stack.prototype.constructor).toEqual('function'));

test('Records can be added to the Stack', () => {
  const s = new Stack();

  expect(() => {
    s.push(1);
  }).not.toThrow();
});

test('Records can be removed from the Stack', () => {
  const s = new Stack();

  expect(() => {
    s.push(1);
    s.pop();
  }).not.toThrow();
});

test('You can view the top record of the Stack without removing it', () => {
  const s = new Stack();

  s.push(1);
  s.push(2);
  s.push(3);

  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);

  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);

  expect(s.peek()).toEqual(1);
  expect(s.pop()).toEqual(1);
})

test('FILO order is preserved', () => {
  const s = new Stack();

  s.push(1);
  s.push(2);
  s.push(3);

  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});