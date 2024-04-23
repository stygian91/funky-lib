import propEq from "../../src/object/propEq";
import { expect, test } from 'vitest';

test("returns true if the property is equal to the provided value", () => {
  const object = { a: 1, b: 2 };
  expect(propEq("a", 1, object)).toBe(true);
  expect(propEq("b", 1, object)).toBe(false);
});
