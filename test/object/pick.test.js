import pick from "../../src/object/pick";

test("pick", () => {
  const result = pick(["a", "c", "d"], { a: 1, b: 2, c: 3 });
  expect(result).toEqual({ a: 1, c: 3 });
});
