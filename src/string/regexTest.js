import curry2 from "../function/curry2";

/**
 * Tests a string vs a regular expression.
 *
 * @param {RegExp} regex
 * @param {string} str
 * @returns {boolean}
 */
const regexTest = (regex, str) => regex.test(str);

export default curry2(regexTest);
