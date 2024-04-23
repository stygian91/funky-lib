import ascend from "../../src/function/ascend";
import { prop, sort } from "../../src";
import { expect, test } from 'vitest';

test("ascend", () => {
  const list = [{ id: 2 }, { id: 3 }, { id: 1 }, { id: 2 }];
  const ascById = ascend(prop("id"));
  expect(sort(ascById, list)).toEqual([
    { id: 1 },
    { id: 2 },
    { id: 2 },
    { id: 3 },
  ]);
});
