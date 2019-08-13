const when = require('./when');
const gt = require('./greaterThan');
const __ = require('../function/placeholderArgument');

test('it calls the thenFn only when the condition is met', () => {
  const neverPast18 = when(gt(__, 18), () => 18);
  expect(neverPast18(15)).toBe(15);
  expect(neverPast18(18)).toBe(18);
  expect(neverPast18(19)).toBe(18);
});
