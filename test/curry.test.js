const curry = require('../src/curry');
const __ = require('../src/placeholderArgument');

const operation = (a, b, c) => a * b + c;
const biggerOperation = (a, b, c, d) => a * b + c * d;

test('curries all arguments after the last supplied in the right order', () => {
  const curriedOperation = curry(operation);
  const binaryOperation = curriedOperation(1);
  const unaryOperation = curriedOperation(1, 2);

  expect(binaryOperation(2, 3)).toBe(5);
  expect(unaryOperation(4)).toBe(6);
});

test('curries placeholder arguments in the right order', () => {
  const curriedOperation = curry(operation);
  const missingSecondArgOp = curriedOperation(1, __, 3);

  expect(missingSecondArgOp(2)).toBe(5);
});

test('curries placeholder and remaining arguments in the right order', () => {
  const curriedOperation = curry(biggerOperation);
  const missingArgsOp = curriedOperation(1, __, 3);

  expect(missingArgsOp(2, 4)).toBe(14);
});

test('calling with all arguments just returns the result', () => {
  const curriedOperation = curry(biggerOperation);

  const operationResult = curriedOperation(1, 2, 3, 4);
  expect(operationResult).toBe(14);
});
