import unnest from "../../src/list/unnest";
import { expect, test } from 'vitest';

test("unest", () => {
  const list = [1, [2, 3], [4, [5]]];
  expect(unnest(list)).toEqual([1, 2, 3, 4, [5]]);
  expect(list).toEqual([1, [2, 3], [4, [5]]]);
});
