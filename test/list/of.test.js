import of from "../../src/list/of";

test("of", () => {
  const res = of(42);
  expect(res).toEqual([42]);
});
