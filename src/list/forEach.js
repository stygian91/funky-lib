import curry2 from "../function/curry2";
import path from "../object/path";
import _objectForEach from "../internals/_objectForEach";
import _stringWhile from "../internals/_stringWhile";
import always from "../function/always";

/**
 * Runs a function for each element of the list, object or string.
 *
 * @param {function} fn
 * @param {any[]|object|string} list
 * @returns {undefined}
 */
const forEach = (fn, list) => {
  if (typeof path("forEach", list) === "function") {
    return list.forEach(fn);
  }

  if (typeof list === "object") {
    return _objectForEach(fn, list);
  }

  if (typeof list === "string") {
    return _stringWhile(always(true), fn, list);
  }

  throw new Error("Can only use forEach on arrays, objects and strings.");
};

export default curry2(forEach);
