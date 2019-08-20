import map from './map';

test('it returns a new array of the same size', () => {
  const list = [1, 2, 3];
  const newList = map((item, index) => item + index, list);
  expect(newList === list).toBe(false);
  expect(newList.length).toBe(3);
  expect(newList[0]).toBe(1);
  expect(newList[1]).toBe(3);
  expect(newList[2]).toBe(5);
});
