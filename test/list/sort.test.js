import sort from "../../src/list/sort";

test("sort", () => {
  const original = [5, 2, 1, 3, 4, 10, 7];
  const sorted = [1, 2, 3, 4, 5, 7, 10];
  expect(sort((a, b) => a - b, original)).toEqual(sorted);
  expect(original).toEqual([5, 2, 1, 3, 4, 10, 7]);
});
