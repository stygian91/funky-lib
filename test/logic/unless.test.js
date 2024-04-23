import unless from "../../src/logic/unless";
import gt from "../../src/logic/greaterThan";
import always from "../../src/function/always";
import { expect, test } from 'vitest';

test("it calls the elseFn only unless the condition is met", () => {
  const neverBelow18 = unless(gt(18), always(18));
  expect(neverBelow18(15)).toBe(18);
  expect(neverBelow18(18)).toBe(18);
  expect(neverBelow18(19)).toBe(19);
});
