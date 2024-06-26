import takeLast from "../../src/list/takeLast";
import { expect, test } from 'vitest';

test("it takes the last N elements from a list", () => {
  const list = [1, 2, 3, 4];
  expect(takeLast(2, list)).toEqual([3, 4]);
});
