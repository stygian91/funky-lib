import _objectFilter from "../../src/internals/_objectFilter";
import { expect, test } from 'vitest';

test("it filters an object's properties based on the condition function", () => {
  const obj = { a: 1, b: 2, c: 3 };
  const filterFn = (value, key) => value === 1 || key === "c";
  expect(_objectFilter(filterFn, obj)).toEqual({ a: 1, c: 3 });
});
