import * as F from "../../src";
import { expect, test } from 'vitest';

test("it returns a new list/object of the same size", () => {
  const list = [1, 2, 3];
  const func = (item, index) => item + index;
  const newList = F.map(func, list);

  expect(newList === list).toBe(false);
  expect(newList).toEqual([1, 3, 5]);
  expect(() => F.map(func, 1234)).toThrow();

  const object = { x: 1, y: 2, z: 3 };
  const func1 = (item) => item + 1;
  expect(F.map(func1, object)).toEqual({ x: 2, y: 3, z: 4 });

  const func2 = (item) => String.fromCharCode(item.charCodeAt(0) + 1);
  const string = "abc";
  expect(F.map(func2, string)).toEqual("bcd");

  const step = (acc, curr) => F.concat(acc, [curr]);
  const res = F.transduce(F.map(x => x + 2), step, [], [1, 2, 3, 4]);
  expect(res).toEqual([3, 4, 5, 6]);
});
