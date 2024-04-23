import and from "../../src/logic/and";
import { expect, test } from 'vitest';

test("and", () => {
  expect(and(false, false)).toEqual(false);
  expect(and(true, false)).toEqual(false);
  expect(and(false, true)).toEqual(false);
  expect(and(true, true)).toEqual(true);
});
