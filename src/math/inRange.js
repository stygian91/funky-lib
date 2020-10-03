import curry from "../function/curry";

/**
 * Checks if a number is within range.
 * The lower boundary is inclusive and upper boundary is exclusive.
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {boolean}
 */
const inRange = (min, max, value) => min <= value && max > value;

export default curry(inRange);
