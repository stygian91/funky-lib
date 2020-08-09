import map from "../list/map";
import curry from "../function/curry";

/**
 * Filters an object by only copying values that are in the `props` list.
 *
 * @param {string[]} props
 * @param {object} object
 * @returns {object}
 */
const pick = (props, object) => {
  const result = {};

  map((key) => {
    const value = object[key];
    if (typeof value !== "undefined") {
      result[key] = value;
    }
  }, props);

  return result;
};

export default curry(pick);
