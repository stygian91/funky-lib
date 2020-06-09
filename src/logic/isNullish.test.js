import isNullish from "./isNullish";

test("it determines if the argument is nullish", () => {
  expect(isNullish(null)).toEqual(true);
  expect(isNullish(undefined)).toEqual(true);
  expect(isNullish(0)).toEqual(false);
  expect(isNullish("")).toEqual(false);
  expect(isNullish("test")).toEqual(false);
});
