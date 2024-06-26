import xor from "../../src/logic/xor";
import { expect, test } from 'vitest';

test("xor", () => {
  expect(xor(false, false)).toEqual(0);
  expect(xor(true, false)).toEqual(1);
  expect(xor(false, true)).toEqual(1);
  expect(xor(true, true)).toEqual(0);
});
