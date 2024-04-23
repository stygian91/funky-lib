import { lensPath, view, set, over } from "../../src/object";
import { multiply } from "../../src/math";
import { expect, test } from 'vitest';

test("lensPath object", () => {
  const myLens = lensPath('foo.bar');
  const data = { foo: { bar: 321 }, str: "lorem" };
  const transformFn = multiply(2);

  expect(view(myLens, data)).toEqual(321);
  expect(set(myLens, 1337, data)).toEqual({ foo: { bar: 1337 }, str: "lorem" });
  expect(over(myLens, transformFn, data)).toEqual({ foo: { bar: 642 }, str: "lorem" });
  expect(data).toEqual({ foo: { bar: 321 }, str: "lorem" });
});
