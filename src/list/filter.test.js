import filter from './filter';

test('returns a new list filtered by the condition function', () => {
  const list = [1, 2, 3];
  const newList = filter((item, index) => (item + index) >= 3, list);
  expect(newList === list).toBe(false);
  expect(newList.length).toBe(2);
  expect(newList[0]).toBe(2);
  expect(newList[1]).toBe(3);
});
