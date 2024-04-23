import divide from "../../src/math/divide";
import { expect, test } from 'vitest';

test("creates a function that divides by 2", () => {
  const div2 = divide(2);

  expect(div2(4)).toBe(2);
  expect(div2(0)).toBe(0);
});

test("divide by zero throws an error", () => {
  expect(() => divide(0, 1)).toThrow();
});
