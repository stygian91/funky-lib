import lt from "../../src/logic/lessThan";
import { expect, test } from 'vitest';

test("returns true if left < right", () => {
  expect(lt(2, 1)).toBe(true);
  expect(lt(2, 2)).toBe(false);
  expect(lt(2, 3)).toBe(false);
});
