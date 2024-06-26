import lte from "../../src/logic/lessThanOrEqual";
import { expect, test } from 'vitest';

test("returns true if left <= right", () => {
  expect(lte(2, 1)).toBe(true);
  expect(lte(2, 2)).toBe(true);
  expect(lte(2, 3)).toBe(false);
});
