import curry from "../function/curry";

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

export default curry(replace);
