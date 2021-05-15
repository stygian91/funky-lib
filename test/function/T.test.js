import { T } from "../../src/function";

test("always returns true", () => {
  expect(T(1, 2, 3)).toEqual(true);
  expect(T()).toEqual(true);
});
