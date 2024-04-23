import all from "../../src/list/all";
import gt from "../../src/logic/greaterThan";
import __ from "../../src/function/placeholderArgument";
import { expect, test } from 'vitest';

test("it returns true only if all elements in the list pass the condition", () => {
  const list = [1, 2, 3, 4];
  const checkList = all(__, list);

  expect(checkList(gt(0))).toBe(true);
  expect(checkList(gt(2))).toBe(false);
  expect(checkList(gt(10))).toBe(false);
});
