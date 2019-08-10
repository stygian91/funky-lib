const sub = require('./subtract');

test('creates a function that subtracts 3', () => {
  const sub3 = sub(3);

  expect(sub3(3)).toBe(0);
  expect(sub3(0)).toBe(-3);
});
