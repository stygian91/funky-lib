const lt = require('./lessThan');

test('returns true if left < right', () => {
  expect(lt(1, 2)).toBe(true);
  expect(lt(2, 2)).toBe(false);
  expect(lt(3, 2)).toBe(false);
});
