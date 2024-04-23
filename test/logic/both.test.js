import both from "../../src/logic/both";
import { expect, test } from 'vitest';

test("returns true only when both argument functions return true", () => {
  const sumGreaterThan10 = (a, b) => a + b > 10;
  const productGreaterThan10 = (a, b) => a * b > 10;

  const sumAndProductGreaterThan10 = both(
    sumGreaterThan10,
    productGreaterThan10
  );
  expect(typeof sumAndProductGreaterThan10).toBe("function");
  expect(sumAndProductGreaterThan10([1, 2])).toBe(false);
  expect(sumAndProductGreaterThan10([2, 6])).toBe(false);
  expect(sumAndProductGreaterThan10([5, 6])).toBe(true);
});
