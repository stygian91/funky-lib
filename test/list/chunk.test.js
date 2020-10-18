import chunk from "../../src/list/chunk";

test("chunk", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(chunk(1, [])).toEqual([]);
  expect(chunk(2, arr)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  expect(chunk(4, arr)).toEqual([
    [1, 2, 3, 4],
    [5, 6],
  ]);
  expect(chunk(6, arr)).toEqual([[1, 2, 3, 4, 5, 6]]);
  expect(chunk(10, arr)).toEqual([[1, 2, 3, 4, 5, 6]]);
  expect(() => chunk(0, arr)).toThrow();
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
