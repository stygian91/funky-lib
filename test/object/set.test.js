import { set, lens } from "../../src/object";

test("set", () => {
  const getter = () => {};
  const setter = (value, data) => ({ ...data, foo: { bar: value } });
  const data = { foo: { bar: 111 }, str: "lorem" };
  const myLens = lens(getter, setter);
  expect(set(myLens, 42, data)).toEqual({ foo: { bar: 42 }, str: "lorem" });
});
