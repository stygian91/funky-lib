import { descend } from "../../src/function";
import { prop, sort } from "../../src";
import { expect, test } from 'vitest';

test("descend", () => {
  const list = [{ id: 2 }, { id: 3 }, { id: 1 }, { id: 2 }];
  const descById = descend(prop("id"));
  expect(sort(descById, list)).toEqual([
    { id: 3 },
    { id: 2 },
    { id: 2 },
    { id: 1 },
  ]);
});
