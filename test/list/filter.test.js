import * as F from "../../src";

test("returns a new list filtered by the condition function", () => {
  const list = [1, 2, 3];
  const obj = { a: 1, b: 2, c: 3 };
  const str = "abcd";
  const filterFn = (item, index) => item + index >= 3;
  const filterFn1 = (item, key) => item === 1 || key === "c";
  const filterFn2 = (char, key) => char === "c" || key === 3;
  const newList = F.filter(filterFn, list);
  const newObj = F.filter(filterFn1, obj);
  const newStr = F.filter(filterFn2, str);

  expect(newList === list).toBe(false);
  expect(newList.length).toBe(2);
  expect(newList).toEqual([2, 3]);

  expect(newObj === obj).toEqual(false);
  expect(newObj).toEqual({ a: 1, c: 3 });

  expect(newStr === str).toEqual(false);
  expect(newStr.length).toEqual(2);
  expect(newStr).toEqual("cd");

  const step = (acc, curr, key) => F.assoc(key, curr, acc);
  const res = F.transduce(F.filter((el) => el > 1), step, {}, obj);
  expect(res).toEqual({ b: 2, c: 3 });

  expect(() => F.filter(filterFn, 1234)).toThrow();
});
