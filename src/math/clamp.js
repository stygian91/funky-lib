import curry3 from "../function/curry3";

/**
 * Clamps a number to fit in a range.
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
const clamp = (min, max, value) => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

export default curry3(clamp);
