import curry from "../function/curry";

/**
 * Splits a string into a list of strings based on a delimiter.
 *
 * @param {string} delimiter
 * @param {string} string
 * @returns {string[]}
 */
const split = (delimiter, string) => string.split(delimiter);

export default curry(split);
