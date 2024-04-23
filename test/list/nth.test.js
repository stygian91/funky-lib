import nth from "../../src/list/nth";
import __ from "../../src/function/placeholderArgument";
import { expect, test } from 'vitest';

test("nth", () => {
  const arr = [1, 2, 3];
  const nthArr = nth(__, arr);
  expect(nthArr(0)).toEqual(1);
  expect(nthArr(2)).toEqual(3);
  expect(nthArr(-1)).toEqual(3);
  expect(nthArr(-3)).toEqual(1);
});
