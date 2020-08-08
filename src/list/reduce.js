import always from "../function/always";
import curry from "../function/curry";
import reduceWhile from "./reduceWhile";

/**
 * Reduces a list, object or string to a single value output value.
 * The reducer function receives the following arguments `(accumulator, currentValue, key, list)`,
 * where `list` is the whole list, object or string.
 *
 * @param {function} func
 * @param {any} initialValue
 * @param {any[]|object|string} list
 * @returns {any}
 */
const reduce = (func, initialValue, list) =>
  reduceWhile(always(true), func, initialValue, list);

export default curry(reduce);
