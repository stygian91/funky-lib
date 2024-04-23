import { difference } from "../../src/list";
import { expect, test } from 'vitest';

test("difference", () => {
  const list1 = [1, 2, 3, 4];
  const list2 = [3, 4, 5, 6];

  expect(difference(list1, list2)).toEqual([1, 2]);

  expect(list1).toEqual([1, 2, 3, 4]);
  expect(list2).toEqual([3, 4, 5, 6]);
});
