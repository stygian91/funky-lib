const unless = require('./unless');
const gt = require('./greaterThan');
const __ = require('../function/placeholderArgument');
const always = require('../function/always');

test('it calls the elseFn only unless the condition is met', () => {
  const neverBelow18 = unless(gt(__, 18), always(18));
  expect(neverBelow18(15)).toBe(18);
  expect(neverBelow18(18)).toBe(18);
  expect(neverBelow18(19)).toBe(19);
});
