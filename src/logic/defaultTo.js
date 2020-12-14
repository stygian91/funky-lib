import isNil from "./isNil";
import when from "./when";
import always from "../function/always";
import curry2 from "../function/curry2";

/**
 * If `value` is nil, then the default value will be returned,
 * otherwise `value` will be returned.
 * Check `isNil` to see which values are considered nil.
 *
 * @see isNil
 * @param {any} def
 * @param {any} value
 * @returns {any}
 */
const defaultTo = (def, value) => when(isNil, always(def), value);

export default curry2(defaultTo);
