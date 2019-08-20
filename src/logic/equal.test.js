import equal from './equal';

test('returns true if left === right', () => {
  const func1 = (a, b) => a + b;
  const func2 = (a, b) => a + b;
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };

  expect(equal(1, 1)).toBe(true);
  expect(equal(1, 2)).toBe(false);

  expect(equal('a', 'a')).toBe(true);
  expect(equal('a', 'b')).toBe(false);

  expect(equal(func1, func1)).toBe(true);
  expect(equal(func1, func2)).toBe(false);

  expect(equal(obj1, obj1)).toBe(true);
  expect(equal(obj1, obj2)).toBe(false);

  expect(equal(true, true)).toBe(true);
  expect(equal(true, false)).toBe(false);

  expect(equal(null, null)).toBe(true);
  expect(equal(undefined, undefined)).toBe(true);
  expect(equal(null, undefined)).toBe(false);
});
