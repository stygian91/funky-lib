import or from "./or";

test("or", () => {
  expect(or(false, false)).toEqual(false);
  expect(or(true, false)).toEqual(true);
  expect(or(false, true)).toEqual(true);
  expect(or(true, true)).toEqual(true);
});
