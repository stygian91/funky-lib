import zipObj from "./zipObj";

test("zipObj", () => {
  const keys = ["a", "b", "c"];
  const values = [1, 2, 3];

  expect(zipObj(keys, values)).toEqual({ a: 1, b: 2, c: 3 });
  expect(keys).toEqual(["a", "b", "c"]);
  expect(values).toEqual([1, 2, 3]);

  expect(zipObj(["a", "b", "c"], [1, 2, 3, 4])).toEqual({ a: 1, b: 2, c: 3 });
});
