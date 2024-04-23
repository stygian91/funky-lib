import { over, lens } from "../../src/object";
import { add } from "../../src/math";
import { expect, test } from 'vitest';

test("over", () => {
  const getter = (data) => data.foo;
  const setter = (value, data) => ({ ...data, foo: value });
  const data = { foo: 101, bar: 42 };
  const transformFn = add(10);
  const myLens = lens(getter, setter);

  expect(over(myLens, transformFn, data)).toEqual({ foo: 111, bar: 42 });
});
