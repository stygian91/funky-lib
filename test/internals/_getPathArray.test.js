import _getPathArray from "../../src/internals/_getPathArray";
import { expect, test } from 'vitest';

test("_getPathArray", () => {
  expect(_getPathArray("a.b.c")).toEqual(["a", "b", "c"]);
  expect(_getPathArray(["foo", "bar"])).toEqual(["foo", "bar"]);
  expect(() => _getPathArray(1)).toThrow();
});
