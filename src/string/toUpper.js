import { curry } from "../function";

/**
 * Converts a string to upper case.
 *
 * @param {string} str
 */
const toUpper = (str) => str.toUpperCase();

export default curry(toUpper);
