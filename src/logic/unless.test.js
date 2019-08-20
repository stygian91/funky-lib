import unless from './unless';
import gt from './greaterThan';
import __ from '../function/placeholderArgument';
import always from '../function/always';

test('it calls the elseFn only unless the condition is met', () => {
  const neverBelow18 = unless(gt(__, 18), always(18));
  expect(neverBelow18(15)).toBe(18);
  expect(neverBelow18(18)).toBe(18);
  expect(neverBelow18(19)).toBe(19);
});
