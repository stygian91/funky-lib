import curry from "../function/curry";

/**
 * Checks an object contains a prop.
 *
 * @param {string} prop
 * @param {object} object
 * @returns {boolean}
 */
const has = (prop, object) => object.hasOwnProperty(prop);

export default curry(has);
