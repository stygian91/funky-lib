import curry2 from "../function/curry2";
import path from "../object/path";
import _objectMap from "../internals/_objectMap";
import _stringMap from "../internals/_stringMap";

/**
 * Maps over a list, object or string and returns a new object of the corresponding type.
 * Each element of the collection is passed through the mapping function
 * and its return value is used for the new collection.
 * The mapping function receives `(value, key, list)`,
 * where `list` is the full list, object or string.
 * Defers to [Array.prototype.map]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map} for lists
 *
 * @param {function} func
 * @param {any[]|object|string} list
 * @returns {any[]|object|string}
 */
const map = (func, list) => {
  if (typeof path("map", list) === "function") {
    return list.map(func);
  }

  if (typeof list === "object") {
    return _objectMap(func, list);
  }

  if (typeof list === "string") {
    return _stringMap(func, list);
  }

  throw new Error("Argument is not mappable");
};

export default curry2(map);
