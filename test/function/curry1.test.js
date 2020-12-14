import { curry1, __ } from "../../src/function";

test("curry1", () => {
  const id = curry1((a) => a);

  expect(id(321)).toEqual(321);

  expect(typeof id(__)).toEqual("function");
  expect(id(__).length).toEqual(1);
  expect(id(__)(123)).toEqual(123);
  expect(id(__)(__)(123)).toEqual(123);

  expect(typeof id()).toEqual("function");
  expect(id().length).toEqual(1);
  expect(id()(42)).toEqual(42);
  expect(id()()(42)).toEqual(42);
});
