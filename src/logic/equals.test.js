import equals from "./equals";
import { Identity } from "../data-structures";

test("returns true if left === right", () => {
  const func1 = (a, b) => a + b;
  const func2 = (a, b) => a + b;
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };

  expect(equals(1, 1)).toBe(true);
  expect(equals(1, 2)).toBe(false);

  expect(equals("a", "a")).toBe(true);
  expect(equals("a", "b")).toBe(false);

  expect(equals(func1, func1)).toBe(true);
  expect(equals(func1, func2)).toBe(false);

  expect(equals(obj1, obj1)).toBe(true);
  expect(equals(obj1, obj2)).toBe(false);

  expect(equals(true, true)).toBe(true);
  expect(equals(true, false)).toBe(false);

  expect(equals(null, null)).toBe(true);
  expect(equals(undefined, undefined)).toBe(true);
  expect(equals(null, undefined)).toBe(false);

  expect(equals(Identity.of(2), Identity.of(2))).toEqual(true);
});
