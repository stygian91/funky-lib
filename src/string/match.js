import curry from "../function/curry";

/**
 * Matches the regular expression with the string and returns the match results.
 *
 * @param {RegExp} regex
 * @param {string} str
 * @returns {string[]|null}
 */
const match = (regex, str) => str.match(regex);

export default curry(match);
