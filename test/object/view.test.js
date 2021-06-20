import { view, lens, path } from "../../src/object";

test("view", () => {
  const getter = path("foo.bar");
  const setter = () => {};
  const data = { foo: { bar: 42 }, str: "lorem" };
  const fooLens = lens(getter, setter);
  expect(view(fooLens, data)).toEqual(42);
});
