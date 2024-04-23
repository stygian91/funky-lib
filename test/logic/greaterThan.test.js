import gt from "../../src/logic/greaterThan";
import { expect, test } from 'vitest';

test("returns true if left is > right argument", () => {
  expect(gt(1, 2)).toBe(true);
  expect(gt(2, 2)).toBe(false);
  expect(gt(3, 2)).toBe(false);
});
