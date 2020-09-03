import { tail } from "../../src/list";

test("tail", () => {
  const str = "qwerty";
  expect(tail(str)).toEqual("werty");
  expect(str).toEqual("qwerty");

  const arr = [2, 3, 4, 5];
  expect(tail(arr)).toEqual([3, 4, 5]);
  expect(arr).toEqual([2, 3, 4, 5]);

  expect(tail([])).toEqual([]);
  expect(tail("")).toEqual("");
  expect(tail([1])).toEqual([]);
  expect(tail("a")).toEqual("");
});
