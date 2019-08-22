import where from './where';
import gt from '../logic/greaterThan';
import __ from '../function/placeholderArgument';

test('it returns true only if all functions in the spec object return true', () => {
  const specObject = {
    a: gt(__, 5),
    b: gt(__, 10),
  };

  const doesObjectMatch = where(specObject);

  const testObject1 = {
    a: 1,
    b: 2,
  };

  const testObject2 = {
    a: 6,
    b: 7,
  };

  const testObject3 = {
    a: 6,
    b: 11,
  };

  expect(doesObjectMatch(testObject1)).toBe(false);
  expect(doesObjectMatch(testObject2)).toBe(false);
  expect(doesObjectMatch(testObject3)).toBe(true);
});
