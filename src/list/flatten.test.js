import flatten from "./flatten";

test("flatten", () => {
  const arr = [1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]];
  expect(flatten(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});