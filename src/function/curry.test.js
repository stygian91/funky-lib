import curry from "./curry";
import __ from "./placeholderArgument";

const operation = (a, b, c) => a * b + c;
const biggerOperation = (a, b, c, d) => a * b + c * d;

test("curries all arguments after the last supplied in the right order", () => {
  const curriedOperation = curry(operation);
  const binaryOperation = curriedOperation(1);
  const unaryOperation = curriedOperation(1, 2);

  expect(binaryOperation(2, 3)).toBe(5);
  expect(unaryOperation(4)).toBe(6);
});

test("curries placeholder arguments in the right order", () => {
  const curriedOperation = curry(operation);
  const missingSecondArgOp = curriedOperation(1, __, 3);

  expect(missingSecondArgOp(2)).toBe(5);
});

test("curries placeholder and remaining arguments in the right order", () => {
  const curriedOperation = curry(biggerOperation);
  const missingArgsOp = curriedOperation(1, __, 3);

  expect(missingArgsOp(2, 4)).toBe(14);
});

test("calling with all arguments just returns the result", () => {
  const curriedOperation = curry(biggerOperation);

  const operationResult = curriedOperation(1, 2, 3, 4);
  expect(operationResult).toBe(14);
});

test("it continues to return a function until all arguments have been passed", () => {
  const result1 = curry(operation);
  expect(typeof result1).toEqual("function");

  const result2 = result1(1);
  expect(typeof result2).toEqual("function");

  const result3 = result2(2);
  expect(typeof result3).toEqual("function");

  const result4 = result3(3);
  expect(result4).toEqual(5);
});
