import of from "../../src/list/of";
import { expect, test } from 'vitest';

test("of", () => {
  const res = of(42);
  expect(res).toEqual([42]);
});
