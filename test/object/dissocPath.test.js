import dissocPath from "../../src/object/dissocPath";
import { expect, test } from 'vitest';

test("dissocPath", () => {
  const obj = { a: { b: { c: 321 } } };
  expect(dissocPath("a.b.c", obj)).toEqual({ a: { b: {} } });
  expect(obj).toEqual({ a: { b: { c: 321 } } });
  expect(dissocPath("", obj)).toEqual({ a: { b: { c: 321 } } });
  expect(dissocPath("a.b.c", { a: { b: null } })).toEqual({ a: { b: null } });
});
