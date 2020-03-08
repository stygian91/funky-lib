import map from "./map";

test("it returns a new list/object of the same size", () => {
  const list = [1, 2, 3];
  const func = (item, index) => item + index;
  const newList = map(func, list);

  expect(newList === list).toBe(false);
  expect(newList).toEqual([1, 3, 5]);
  expect(() => map(func, 1234)).toThrow();

  const object = { x: 1, y: 2, z: 3 };
  const func1 = item => ++item;
  expect(map(func1, object)).toEqual({ x: 2, y: 3, z: 4 });

  const func2 = item => String.fromCharCode(item.charCodeAt(0) + 1);
  const string = "abc";
  expect(map(func2, string)).toEqual("bcd");
});
