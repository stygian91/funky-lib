import { inRange } from "../../src/";
import { expect, test } from 'vitest';

test("inRange", () => {
  expect(inRange(0, 2, 1)).toEqual(true);
  expect(inRange(0, 2, 2)).toEqual(false);
  expect(inRange(0, 2, 0)).toEqual(true);
  expect(inRange(0, 2, -1)).toEqual(false);
  expect(inRange(0, 2, 3)).toEqual(false);
});
