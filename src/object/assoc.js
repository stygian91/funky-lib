import curry from "../function/curry";

/**
 * Creates a shallow copy of the object
 * and sets the value at `propName`.
 *
 * @see disoc
 * @param {string} propName
 * @param {any} value
 * @param {object} object
 * @returns {object}
 */
const assoc = (propName, value, object) => ({
  ...object,
  [propName]: value,
});

export default curry(assoc);
