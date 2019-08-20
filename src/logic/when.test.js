import when from './when';
import gt from './greaterThan';
import __ from '../function/placeholderArgument';
import always from '../function/always';

test('it calls the thenFn only when the condition is met', () => {
  const neverPast18 = when(gt(__, 18), always(18));
  expect(neverPast18(15)).toBe(15);
  expect(neverPast18(18)).toBe(18);
  expect(neverPast18(19)).toBe(18);
});
