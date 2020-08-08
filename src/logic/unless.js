import curry from "../function/curry";

/**
 * Returns the result of `elseFn(arg)` only if `conditionFn(arg)` returns a falsy value,
 * otherwise returns the argument unchanged.
 *
 * @see when
 * @param {function} conditionFn
 * @param {function} elseFn
 * @param {any} arg
 * @returns {any}
 */
const unless = (conditionFn, elseFn, arg) =>
  conditionFn(arg) ? arg : elseFn(arg);

export default curry(unless);
