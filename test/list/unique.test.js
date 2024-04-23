import unique from "../../src/list/unique";
import { expect, test } from 'vitest';

test("unique", () => {
  const arr = [1, 2, 3, 4, 3, 2, 4];
  expect(unique(arr)).toEqual([1, 2, 3, 4]);
  expect(unique([1])).toEqual([1]);
  expect(arr).toEqual([1, 2, 3, 4, 3, 2, 4]);
});
