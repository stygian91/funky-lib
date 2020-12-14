import curry2 from "../function/curry2";

/**
 * Matches the regular expression with the string and returns the match results.
 *
 * @param {RegExp} regex
 * @param {string} str
 * @returns {string[]|null}
 */
const match = (regex, str) => str.match(regex);

export default curry2(match);
