import forEach from "../../src/list/forEach";
import { expect, test } from 'vitest';

const testForEach = (original, expected, originalClone) => {
  const result = [];
  forEach((value, key, whole) => {
    result.push({ key, value, whole });
  }, original);
  expect(result).toEqual(expected);
  expect(original).toEqual(originalClone);
};

test("forEach", () => {
  testForEach(
    [100, 200, 300],
    [
      { key: 0, value: 100, whole: [100, 200, 300] },
      { key: 1, value: 200, whole: [100, 200, 300] },
      { key: 2, value: 300, whole: [100, 200, 300] },
    ],
    [100, 200, 300]
  );

  testForEach(
    { a: 100, b: 200, c: 300 },
    [
      { key: "a", value: 100, whole: { a: 100, b: 200, c: 300 } },
      { key: "b", value: 200, whole: { a: 100, b: 200, c: 300 } },
      { key: "c", value: 300, whole: { a: 100, b: 200, c: 300 } },
    ],
    { a: 100, b: 200, c: 300 }
  );

  testForEach(
    "abc",
    [
      { key: 0, value: "a", whole: "abc" },
      { key: 1, value: "b", whole: "abc" },
      { key: 2, value: "c", whole: "abc" },
    ],
    "abc"
  );

  expect(() => forEach((val) => val, 123)).toThrow();
});
