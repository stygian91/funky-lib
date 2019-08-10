const ifElse = require('../src/ifElse');

const greaterThan10 = a => a > 10;

test('returns "then" statement if condition is true', () => {
  const return20IfLargerThan10 = ifElse(greaterThan10(12), 20, null);

  expect(return20IfLargerThan10).toBe(20);
});

test('returns "otherwise" statement if condition is false', () => {
  const return5IfNotLargerThan10 = ifElse(greaterThan10(7), null, 5);

  expect(return5IfNotLargerThan10).toBe(5);
});
