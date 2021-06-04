import filter from "../list/filter";
import includes from "../list/includes";
import curry2 from "../function/curry2";

/**
 * Filters an object by only copying values that are in the `props` list.
 *
 * @function
 * @name pick
 * @param {string[]} props
 * @param {object} object
 * @returns {object}
 */
const pick = (props, object) =>
  filter((value, key) => includes(key, 0, props), object);

export default curry2(pick);
