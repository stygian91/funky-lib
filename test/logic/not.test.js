import not from "../../src/logic/not";
import { expect, test } from 'vitest';

test("it returns the opposite argument", () => {
  expect(not(true)).toBe(false);
  expect(not(false)).toBe(true);
  expect(not(0)).toBe(true);
  expect(not(1)).toBe(false);
});
