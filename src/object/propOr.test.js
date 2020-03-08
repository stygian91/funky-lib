import propOr from "./propOr";

test("returns the default value if the prop is undefined", () => {
  const object1 = { a: 1 };
  const object2 = { b: 1 };

  const getAOrZero = propOr(0, "a");
  expect(getAOrZero(object1)).toBe(1);
  expect(getAOrZero(object2)).toBe(0);
});
