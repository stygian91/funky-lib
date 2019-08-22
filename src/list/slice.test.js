import slice from "./slice";

test('it slices a list or string', () => {
  const list = [1, 2, 3];
  const string = '123';

  const sliceSecondTwo = slice(1, 3);

  const listResult = sliceSecondTwo(list);
  expect(listResult.length).toBe(2);
  expect(listResult[0]).toBe(2);
  expect(listResult[1]).toBe(3);

  const stringResult = sliceSecondTwo(string);
  expect(stringResult).toBe('23');
});
