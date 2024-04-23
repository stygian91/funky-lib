import { size } from "../../src/list";
import { expect, test } from 'vitest';

test("size", () => {
  expect(size("abc")).toEqual(3);
  expect(size([1, 2, 3, 4])).toEqual(4);
  expect(size({ a: 1, [Symbol("mySymbol")]: 42 })).toEqual(2);
  expect(() => size(123)).toThrow();
});
