import { union } from "./";

test("union", () => {
  const list1 = [1, 1, 3, 5];
  const list2 = [2, 3, 5, 4];
  expect(union(list1, list2)).toEqual([1, 3, 5, 2, 4]);
  expect(list1).toEqual([1, 1, 3, 5]);
  expect(list2).toEqual([2, 3, 5, 4]);
});
