import { F } from "../../src/function";

test("always returns false", () => {
  expect(F(1, 2, 3)).toEqual(false);
  expect(F()).toEqual(false);
});
