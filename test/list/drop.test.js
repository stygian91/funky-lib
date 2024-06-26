import drop from "../../src/list/drop";
import { expect, test } from 'vitest';

test("drop", () => {
  const original = [1, 2, 3];
  expect(drop(1, original)).toEqual([1, 3]);
  expect(original).toEqual([1, 2, 3]);
});
