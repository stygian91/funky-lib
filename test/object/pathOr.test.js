import pathOr from "../../src/object/pathOr";
import { expect, test } from 'vitest';

test("retrieves the value at the specified path, otherwise returns the default", () => {
  const object = {
    a: {
      b: {
        c: 321,
      },
    },
  };

  expect(pathOr(111, "a.b.c", object)).toEqual(321);
  expect(pathOr(111, "asd", object)).toEqual(111);
  expect(pathOr(111, ["a", "b", "c"], object)).toEqual(321);
  expect(() => pathOr(123, 123, object)).toThrow();
});
