import gt from "./greaterThan";

test("returns true if left is > right argument", () => {
  expect(gt(2, 1)).toBe(true);
  expect(gt(2, 2)).toBe(false);
  expect(gt(2, 3)).toBe(false);
});
