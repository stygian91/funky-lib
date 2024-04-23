import { pluck } from "../../src/list";
import { expect, test } from 'vitest';

test("pluck", () => {
  const list = [{ a: { b: 1 } }, { a: { b: 3 } }, { a: { b: 10 } }];

  expect(pluck("a.b", list)).toEqual([1, 3, 10]);
  expect(pluck(["a", "b"], list)).toEqual([1, 3, 10]);
  expect(list).toEqual([{ a: { b: 1 } }, { a: { b: 3 } }, { a: { b: 10 } }]);
});
