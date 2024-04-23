import flip from "../../src/function/flip";
import { expect, test } from 'vitest';

test("reverses the order of arguments", () => {
  const func = flip((a, b, c) => a * b + c);

  expect(func(2, 3, 4)).toBe(14);
});
