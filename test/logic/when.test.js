import when from "../../src/logic/when";
import gt from "../../src/logic/greaterThan";
import always from "../../src/function/always";
import { expect, test } from 'vitest';

test("it calls the thenFn only when the condition is met", () => {
  const neverPast18 = when(gt(18), always(18));
  expect(neverPast18(15)).toBe(15);
  expect(neverPast18(18)).toBe(18);
  expect(neverPast18(19)).toBe(18);
});
