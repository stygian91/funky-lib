import unfold from "../../src/list/unfold";
import { expect, test } from 'vitest';

test("unfold", () => {
  expect(unfold(() => false, 0)).toEqual([]);
  expect(unfold((seed) => (seed < 10 ? [seed, seed + 3] : false), 1)).toEqual([
    1,
    4,
    7,
  ]);
});
