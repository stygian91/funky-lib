import intersection from "../../src/list/intersection";
import { expect, test } from 'vitest';

test("intersection", () => {
  const list1 = [1, 2, 3, 4];
  const list2 = [1, 3, 5, 6];

  expect(intersection(list1, list2)).toEqual([1, 3]);
  expect(list1).toEqual([1, 2, 3, 4]);
  expect(list2).toEqual([1, 3, 5, 6]);
});
