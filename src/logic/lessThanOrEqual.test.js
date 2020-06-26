import lte from "./lessThanOrEqual";

test("returns true if left <= right", () => {
  expect(lte(1, 2)).toBe(true);
  expect(lte(2, 2)).toBe(true);
  expect(lte(3, 2)).toBe(false);
});
