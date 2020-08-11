import curry from "../function/curry";
import path from "../object/path";
import _objectFilter from "../internals/_objectFilter";
import _stringFilter from "../internals/_stringFilter";

/**
 * Filters the elements of an array, object or string
 * and returns a new array, object or string respectively.
 *
 * @param {function} func
 * @param {array|string|object} list
 * @returns {array|string|object}
 */
const filter = (func, list) => {
  if (typeof path("filter", list) === "function") {
    return list.filter(func);
  }

  if (typeof list === "object") {
    return _objectFilter(func, list);
  }

  if (typeof list === "string") {
    return _stringFilter(func, list);
  }

  throw new Error("Argument is not filterable.");
};

export default curry(filter);
