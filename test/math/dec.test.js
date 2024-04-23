import { dec } from "../../src";
import { expect, test } from 'vitest';

test("dec", () => {
  expect(dec(1)).toEqual(0);
  expect(dec(0)).toEqual(-1);
});
