import curry3 from "../function/curry3";

/**
 * Returns `object[prop]` if it exists or `defaultValue` otherwise.
 *
 * @param {any} defaultValue
 * @param {string} propName
 * @param {object} object
 * @returns {any}
 */
const propOr = (defaultValue, propName, object) => {
  if (object === null || typeof object === "undefined") {
    return defaultValue;
  }

  const value = object[propName];
  return typeof value === "undefined" ? defaultValue : value;
};

export default curry3(propOr);
