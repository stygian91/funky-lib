import divide from "./divide";
import __ from "../function/placeholderArgument";

test("creates a function that divides by 2", () => {
  const div2 = divide(__, 2);

  expect(div2(4)).toBe(2);
  expect(div2(0)).toBe(0);
});

test("divide by zero throws an error", () => {
  expect(() => divide(1, 0)).toThrow();
});
