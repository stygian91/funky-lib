import { omit } from "../../src/object";
import { __ } from "../../src/function";

test("omit", () => {
  const nums = { a: 1, b: 2, c: 3, d: 4 };
  const omitNums = omit(__, nums);
  expect(omitNums(['a', 'c'])).toEqual({ b: 2, d: 4 });
  expect(omitNums([])).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  expect(omitNums(['a', 'e'])).toEqual({ b: 2, c: 3, d: 4 });
  expect(omitNums(['e', 'f'])).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  expect(nums).toEqual({ a: 1, b: 2, c: 3, d: 4 });
});
