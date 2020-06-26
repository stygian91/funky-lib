import _objectReduce from "./_objectReduce";
import __ from "../function/placeholderArgument";

test("it reduces while the condition function returns a truthy value", () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  const subtractWhileNotNegative = _objectReduce(
    (accumulator, current) => accumulator - current,
    __,
    obj
  );

  expect(subtractWhileNotNegative(20)).toEqual(10);
  expect(subtractWhileNotNegative(10)).toEqual(0);
  expect(subtractWhileNotNegative(5)).toEqual(-5);
});
