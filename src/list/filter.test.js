import filter from './filter';

test('returns a new list filtered by the condition function', () => {
  const list = [1, 2, 3];
  const obj = { a: 1, b: 2, c: 3 };
  const filterFn = (item, index) => (item + index) >= 3;
  const filterFn1 = (item, key) => item === 1 || key === 'c';
  const newList = filter(filterFn, list);
  const newObj = filter(filterFn1, obj);

  expect(newList === list).toBe(false);
  expect(newList.length).toBe(2);
  expect(newList).toEqual([2, 3]);

  expect(newObj === obj).toEqual(false);
  expect(newObj).toEqual({ a: 1, c: 3 });

  expect(() => filter(filterFn, 1234)).toThrow();
});
