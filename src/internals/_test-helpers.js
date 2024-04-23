import curry3 from "../function/curry3";
import curry2 from "../function/curry2";
import { expect } from "vitest";

export const expectValue = curry3((type, expectedValue, actual) =>
  expect(actual.equals(type.of(expectedValue))).toEqual(true),
);

export const expectEquals = curry3((type, expected, actual) => {
  expectType(type, actual);
  expect(actual.equals(expected)).toEqual(true);
});

export const expectType = curry2((type, tbd) =>
  expect(tbd instanceof type).toEqual(true),
);
