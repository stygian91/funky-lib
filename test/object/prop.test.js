import prop from "../../src/object/prop";
import { expect, test } from 'vitest';

test("it returns a property from an object", () => {
  expect(prop("length", [1, 2])).toBe(2);
  expect(prop("a", { a: 1 })).toBe(1);
});
