import identity from "../../src/function/identity";
import { expect, test } from 'vitest';

test("always returns whatever is given to it", () => {
  expect(identity(1)).toBe(1);
  expect(identity("a")).toBe("a");
});
