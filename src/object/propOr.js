import curry from "../function/curry";

/**
 * Returns `object[prop]` if it exists or `defaultValue` otherwise.
 *
 * @param {any} defaultValue
 * @param {string} propName
 * @param {object} object
 * @returns {any}
 */
const propOr = (defaultValue, propName, object) => {
  const value = object[propName];
  return typeof value === "undefined" ? defaultValue : value;
};

export default curry(propOr);
