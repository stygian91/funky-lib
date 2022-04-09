import curry3 from "../function/curry3";

/**
 * Replaces
 *
 * @param {string|RegExp} search
 * @param {string|function} replacement
 * @param {string} string
 * @returns {string}
 */
const replace = (search, replacement, string) =>
  string.replace(search, replacement);

export default curry3(replace);
