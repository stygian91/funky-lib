import gte from "../../src/logic/greaterThanOrEqual";
import { expect, test } from 'vitest';

test("returns true if left is >= right", () => {
  expect(gte(2, 2)).toBe(true);
  expect(gte(1, 2)).toBe(true);
  expect(gte(3, 2)).toBe(false);
});
