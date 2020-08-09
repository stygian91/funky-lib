import curry from "../function/curry";

/**
 * Retruns the prop with the specified key.
 *
 * @param {string} propName
 * @param {object} object
 * @returns {any}
 */
const prop = (propName, object) => object[propName];

export default curry(prop);
