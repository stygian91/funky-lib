const identity = require('./identity');

test('always returns whatever is given to it', () => {
  expect(identity(1)).toBe(1);
  expect(identity('a')).toBe('a');
});
