import ifElse from './ifElse';
import always from '../function/always';

const greaterThan10 = (a, b, c) => (a + b + c) > 10;
const sum3 = (a, b, c) => a + b + c;

test('returns "then" statement if condition is true', () => {
  const sum3IfGreaterThan10 = ifElse(greaterThan10, sum3, always(null));

  expect(sum3IfGreaterThan10(5, 4, 2)).toBe(11);
  expect(sum3IfGreaterThan10(1, 2, 3)).toBe(null);
});

test('returns "otherwise" statement if condition is false', () => {
  const sum3IfNotGreaterThan10 = ifElse(greaterThan10, always(null), sum3);

  expect(sum3IfNotGreaterThan10(1, 2, 3)).toBe(6);
  expect(sum3IfNotGreaterThan10(5, 4, 2)).toBe(null);
});
