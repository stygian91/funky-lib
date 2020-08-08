import curry from "../function/curry";

/**
 * Returns the result of `thenFn(arg)` only if `conditionFn(arg)` returns a truthy value,
 * otherwise returns the argument unchanged.
 *
 * @see unless
 * @param {function} conditionFn
 * @param {function} thenFn
 * @param {any} arg
 * @returns {any}
 */
const when = (conditionFn, thenFn, arg) =>
  conditionFn(arg) ? thenFn(arg) : arg;

export default curry(when);
