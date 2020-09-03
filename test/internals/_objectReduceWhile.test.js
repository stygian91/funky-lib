import _objectReduceWhile from "../../src/internals/_objectReduceWhile";
import gte from "../../src/logic/greaterThanOrEqual";
import __ from "../../src/function/placeholderArgument";

test("it reduces while the condition function returns a truthy value", () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  const subtractWhileNotNegative = _objectReduceWhile(
    (accumulator, current) => gte(0, accumulator - current),
    (accumulator, current) => accumulator - current,
    __,
    obj
  );

  expect(subtractWhileNotNegative(20)).toEqual(10);
  expect(subtractWhileNotNegative(10)).toEqual(0);
  expect(subtractWhileNotNegative(5)).toEqual(2);
});
