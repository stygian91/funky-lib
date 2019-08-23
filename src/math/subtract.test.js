import sub from './subtract';
import __ from '../function/placeholderArgument';

test('creates a function that subtracts 3', () => {
  const sub3 = sub(__, 3);

  expect(sub3(3)).toBe(0);
  expect(sub3(0)).toBe(-3);
});
