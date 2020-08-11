import { tail } from "./";

test("tail", () => {
  expect(tail("qwerty")).toEqual("werty");
  expect(tail([2, 3, 4, 5])).toEqual([3, 4, 5]);
  expect(tail([])).toEqual([]);
  expect(tail("")).toEqual("");
  expect(tail([1])).toEqual([]);
  expect(tail("a")).toEqual("");
});
