const ifElse = require('./ifElse');

const greaterThan10 = a => a > 10;

test('returns "then" statement if condition is true', () => {
  const return20IfLargerThan10 = ifElse(greaterThan10, 20, null);

  expect(return20IfLargerThan10(12)).toBe(20);
});

test('returns "otherwise" statement if condition is false', () => {
  const return5IfNotLargerThan10 = ifElse(greaterThan10, null, 5);

  expect(return5IfNotLargerThan10(7)).toBe(5);
});
