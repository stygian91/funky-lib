import add from "../../src/math/add";
import { expect, test } from 'vitest';

test("creates a function that adds 2", () => {
  const add2 = add(2);
  expect(typeof add2).toBe("function");
  expect(add2(1)).toBe(3);
  expect(add2(-1)).toBe(1);
});
