import { append } from "../../src/list";
import { expect, test } from 'vitest';

test("append", () => {
  const list = [1, 2, 3];
  expect(append(4, list)).toEqual([1, 2, 3, 4]);
  expect(list).toEqual([1, 2, 3]);
});
