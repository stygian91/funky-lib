import dissoc from "../../src/object/dissoc";

test("dissoc", () => {
  const original = { a: 1, b: 2, c: 3 };
  expect(dissoc("b", original)).toEqual({ a: 1, c: 3 });
  expect(dissoc("d", original)).toEqual({ a: 1, b: 2, c: 3 });
});
