import without from "../../src/list/without";
import { expect, test } from 'vitest';

test("without", () => {
  const list = [1, 2, 3, 4, 5];
  expect(without([1, 3], list)).toEqual([2, 4, 5]);
  expect(without([], list)).toEqual([1, 2, 3, 4, 5]);
  expect(without([1, 2, 3], [])).toEqual([]);
  expect(without([], [])).toEqual([]);
  expect(list).toEqual([1, 2, 3, 4, 5]);
});
