import curry from "../function/curry";

export const expectValue = curry((type, expectedValue, actual) =>
  expect(actual.equals(type.of(expectedValue))).toEqual(true)
);

export const expectEquals = curry((type, expected, actual) => {
  expectType(type, actual);
  expect(actual.equals(expected)).toEqual(true);
});

export const expectNotEquals = curry((type, expected, actual) => {
  expectType(type, actual);
  expect(actual.equals(expected)).toEqual(false);
});

export const expectType = curry((type, tbd) =>
  expect(tbd instanceof type).toEqual(true)
);
