import all from './all';
import gt from '../logic/greaterThan';
import __ from '../function/placeholderArgument';

test('it returns true only if all elements in the list pass the condition', () => {
  const list = [1, 2, 3, 4];
  const checkList = all(__, list);

  expect(checkList(gt(__, 0))).toBe(true);
  expect(checkList(gt(__, 2))).toBe(false);
  expect(checkList(gt(__, 10))).toBe(false);
});
