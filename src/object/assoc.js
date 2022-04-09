import curry3 from "../function/curry3";

/**
 * Creates a shallow copy of the object
 * and sets the value at `propName`.
 *
 * @see dissoc
 * @param {string} propName
 * @param {any} value
 * @param {object} object
 * @returns {object}
 */
const assoc = (propName, value, object) => ({
  ...object,
  [propName]: value,
});

export default curry3(assoc);
