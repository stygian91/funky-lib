import gte from "./greaterThanOrEqual";

test("returns true if left is >= right", () => {
  expect(gte(2, 2)).toBe(true);
  expect(gte(2, 1)).toBe(true);
  expect(gte(2, 3)).toBe(false);
});
