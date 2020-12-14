import curry from "../function/curry";
import curry2 from "../function/curry2";

export const expectValue = curry((type, expectedValue, actual) =>
  expect(actual.equals(type.of(expectedValue))).toEqual(true)
);

export const expectEquals = curry((type, expected, actual) => {
  expectType(type, actual);
  expect(actual.equals(expected)).toEqual(true);
});

export const expectType = curry2((type, tbd) =>
  expect(tbd instanceof type).toEqual(true)
);
