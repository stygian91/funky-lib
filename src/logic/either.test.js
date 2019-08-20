import either from './either';

test('returns true when either one of the argument functions returns true', () => {
  const sumGreaterThan10 = (a, b) => a + b > 10;
  const productGreaterThan10 = (a, b) => a * b > 10;

  const sumOrProductGreaterThan10 = either(sumGreaterThan10, productGreaterThan10);

  expect(typeof sumOrProductGreaterThan10).toBe('function');
  expect(sumOrProductGreaterThan10(1, 2)).toBe(false);
  expect(sumOrProductGreaterThan10(2, 6)).toBe(true);
  expect(sumOrProductGreaterThan10(5, 6)).toBe(true);
});
