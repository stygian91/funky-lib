import assoc from './assoc';

test('it updates a property in an object', () => {
  const object = { a: 1, b: 2, c: 3 };
  const result = assoc('b', 3, object);
  expect(object === result).toEqual(false);
  expect(result).toEqual({ a: 1, b: 3, c: 3});
});
