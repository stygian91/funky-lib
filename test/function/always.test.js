import always from "../../src/function/always";
import { expect, test } from 'vitest';

test("always returns the given value", () => {
  const alwaysTrue = always(true);
  expect(alwaysTrue()).toBe(true);
  expect(alwaysTrue(false)).toBe(true);
});
