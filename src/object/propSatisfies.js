import curry3 from "../function/curry3";
import propOr from "./propOr";

/**
 * Checks if the prop satisfies the condition function.
 *
 * @param {function} conditionFn
 * @param {string} propName
 * @param {object} object
 * @returns {boolean}
 */
const propSatisfies = (conditionFn, propName, object) =>
  conditionFn(propOr(void 0, propName, object));

export default curry3(propSatisfies);
