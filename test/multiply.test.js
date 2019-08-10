const multiply = require('../src/math/multiply');

test('creates a function that multiplies by 3', () => {
  const mul3 = multiply(3);

  expect(mul3(1)).toBe(3);
  expect(mul3(0)).toBe(0);
  expect(mul3(2)).toBe(6);
  expect(mul3(-1)).toBe(-3);
});
