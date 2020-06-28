import and from "./and";

test("and", () => {
  expect(and(false, false)).toEqual(false);
  expect(and(true, false)).toEqual(false);
  expect(and(false, true)).toEqual(false);
  expect(and(true, true)).toEqual(true);
});
