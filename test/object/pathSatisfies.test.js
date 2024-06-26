import pathSatisfies from "../../src/object/pathSatisfies";
import gt from "../../src/logic/greaterThan";
import { expect, test } from 'vitest';

test("the condition function is called with the prop at the specified path", () => {
  const object1 = {
    a: {
      b: 123,
    },
  };
  const object2 = {
    a: {
      b: 1,
    },
  };
  const aBIsLargerThan100 = pathSatisfies(gt(100), "a.b");
  const isUndefined = (x) => typeof x === "undefined";
  expect(aBIsLargerThan100(object1)).toBe(true);
  expect(aBIsLargerThan100(object2)).toBe(false);
  expect(pathSatisfies(isUndefined, "asd", object1)).toEqual(true);
  expect(pathSatisfies(isUndefined, "a.b", object1)).toEqual(false);
});
