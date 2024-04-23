import { inc } from "../../src/";
import { expect, test } from 'vitest';

test("inc", () => {
  expect(inc(1)).toEqual(2);
  expect(inc(0)).toEqual(1);
});
