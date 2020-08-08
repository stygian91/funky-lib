import reduceWhile from "./reduceWhile";
import curry from "../function/curry";

/**
 * Checks if any of the elements in the list pass a condition.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {boolean}
 */
const any = (condFn, list) =>
  reduceWhile(
    (acc) => !acc,
    (acc, current) => acc || condFn(current),
    false,
    list
  );

export default curry(any);
