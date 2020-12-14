import curry1 from "../function/curry1";

/**
 * Checks if a value is nil.
 * A value is considered nil if it's `null`, `undefined` or `NaN`.
 *
 * @param {any} arg
 * @returns {boolean}
 */
const isNil = (arg) =>
  arg === null || typeof arg === "undefined" || Number.isNaN(arg);

export default curry1(isNil);
