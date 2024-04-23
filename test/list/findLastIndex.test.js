import findLastIndex from "../../src/list/findLastIndex";
import lt from "../../src/logic/lessThan";
import { expect, test } from 'vitest';

test("findLastIndex", () => {
  const list = [1, 2, 3, 1];
  expect(findLastIndex(lt(2), list)).toEqual(3);
  expect(findLastIndex(lt(0), list)).toEqual(-1);
});
