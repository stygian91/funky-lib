import { curry1 } from "../function";

/**
 * Trims whitespace at the beginning and end of a string.
 *
 * @param {string} str
 */
const trim = (str) => str.trim();

export default curry1(trim);
