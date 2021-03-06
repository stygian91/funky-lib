import curry2 from "../function/curry2";
import isNil from "./isNil";

/**
 * Checks if the two arguments are equal
 * according to the strict equality comparison(`===`).
 * Defers to `left.equals(right)` if such a method exists.
 *
 * @param {any} left
 * @param {any} right
 * @returns {boolean}
 */
const equals = (left, right) => {
  if (!isNil(left) && typeof left.equals === "function") {
    return left.equals(right);
  }

  return left === right;
};

export default curry2(equals);
