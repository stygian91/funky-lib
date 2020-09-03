import reduceWhile from "../../src/list/reduceWhile";
import lte from "../../src/logic/lessThanOrEqual";
import __ from "../../src/function/placeholderArgument";

test("it reduces the list only while the condition fn returns a truthy value", () => {
  const list = [1, 2, 3, 4];
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  const str = "abcd";

  const subtractWhileNotNegative = reduceWhile(
    (acc, current) => acc - current >= 0,
    (acc, current) => acc - current
  );

  const addWhileLessThan500 = reduceWhile(
    (accumulator, current) => lte(500, accumulator + current.charCodeAt(0)),
    (accumulator, current) => accumulator + current.charCodeAt(0),
    __,
    str
  );

  expect(subtractWhileNotNegative(5, list)).toBe(2);
  expect(subtractWhileNotNegative(5, obj)).toBe(2);
  expect(addWhileLessThan500(107)).toEqual(401);
  expect(() => subtractWhileNotNegative(5, 1234)).toThrow();
});
