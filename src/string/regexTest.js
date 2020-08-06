import curry from "../function/curry";

/**
 * Tests a string vs a regular expression.
 *
 * @param {RegExp} regex
 * @param {string} str
 * @returns {boolean}
 */
const regexTest = (regex, str) => regex.test(str);

export default curry(regexTest);
