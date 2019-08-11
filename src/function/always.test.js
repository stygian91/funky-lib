const always = require('./always');

test('always returns the given value', () => {
  const alwaysTrue = always(true);
  expect(alwaysTrue()).toBe(true);
  expect(alwaysTrue(false)).toBe(true);
});
