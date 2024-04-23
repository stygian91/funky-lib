import zip from "../../src/list/zip";
import { expect, test } from 'vitest';

test("zip", () => {
  const arr1 = [1, 2, 3];
  const arr2 = ["a", "b", "c"];
  expect(zip(arr1, arr2)).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ]);
  expect(arr1).toEqual([1, 2, 3]);
  expect(arr2).toEqual(["a", "b", "c"]);

  expect(zip([1, 2, 3, 4], ["a", "b", "c"])).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ]);
  expect(zip([1, 2, 3], ["a", "b", "c", "d"])).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ]);
});
