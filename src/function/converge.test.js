import converge from './converge';
import reduce from '../list/reduce';
import add from '../math/add';
import div from '../math/divide';
import prop from '../object/prop';

test('it executes the branch functions and passes their results to the converging function', () => {
  const sum = reduce(add, 0);
  const average = converge(div, [sum, prop('length')]);

  const result = average([1, 2, 3, 4, 5]);
  expect(result).toBe(3);
});
