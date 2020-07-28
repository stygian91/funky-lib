import isNil from "./isNil";

test("it determines if the argument is nullish", () => {
  expect(isNil(null)).toEqual(true);
  expect(isNil(undefined)).toEqual(true);
  expect(isNil(0)).toEqual(false);
  expect(isNil("")).toEqual(false);
  expect(isNil("test")).toEqual(false);
});
