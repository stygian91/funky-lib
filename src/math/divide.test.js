import divide from './divide';
import __ from '../function/placeholderArgument';

test('creates a function that divides by 2', () => {
  const div2 = divide(__, 2);

  expect(div2(4)).toBe(2);
  expect(div2(0)).toBe(0);
});

test('creating a divide by zero function throws an error', () => {
  expect(divide(__, 0)).toThrow();
});
