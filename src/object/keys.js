import _keys from "../internals/_keys";
import curry from "../function/curry";

/**
 * Returns all own enumerable property names and symbols.
 *
 * @function
 * @name keys
 * @param {object} obj
 * @returns {any[]}
 */
export default curry(_keys);
