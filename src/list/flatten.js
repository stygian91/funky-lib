import curry from "../function/curry";
import forEach from "./forEach";

/**
 * Returns a new list with all nested arrays flattened.
 *
 * @param {any[]} list
 * @returns {any[]}
 */
const flatten = (list) => {
  const result = [];

  forEach((value) => {
    if (Array.isArray(value)) {
      forEach((innerValue) => result.push(innerValue), flatten(value));
    } else {
      result.push(value);
    }
  }, list);

  return result;
};

export default curry(flatten);
