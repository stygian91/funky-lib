import groupBy from './groupBy';

test('groups lists with a specified function', () => {
  const groupFn = (value, index) => value;
  const list = [1, 2, 1, 3, 4, 2];
  const result = groupBy(groupFn, list);
  const expected = {
    1: [1, 1],
    2: [2, 2],
    3: [3],
    4: [4],
  };

  expect(result).toEqual(expected);
});
