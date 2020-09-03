import { range } from "../../src/list";

test("range", () => {
  expect(range(1, 4)).toEqual([1, 2, 3]);
  expect(range(5, 1)).toEqual([]);
});
