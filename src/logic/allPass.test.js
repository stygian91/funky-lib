const allPass = require('./allPass');

test('returns true only when all argument functions return true', () => {
  const sumGreaterThan10 = (a, b) => a + b > 10;
  const productGreaterThan10 = (a, b) => a * b > 10;
  const differenceLessThan5 = (a, b) => Math.abs(a - b) < 5;

  const numbersPass = allPass(sumGreaterThan10, productGreaterThan10, differenceLessThan5);
  expect(typeof numbersPass).toBe('function');
  expect(numbersPass(1, 2)).toBe(false);
  expect(numbersPass(1, 6)).toBe(false);
  expect(numbersPass(2, 6)).toBe(false);
  expect(numbersPass(2, 7)).toBe(false);
  expect(numbersPass(5, 6)).toBe(true);
});
