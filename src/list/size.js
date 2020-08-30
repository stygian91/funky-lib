import { curry } from "../function";
import _keys from "../internals/_keys";

/**
 * Returns the size of a list, object or string.
 * For lists and strings, it will just return the `length` property.
 * For objects - returns the sum of the counts of its own property names
 * and its own property symbols.
 *
 * @param {any[]|object|string} collection
 * @returns {number}
 */
const size = (collection) => {
  if (Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  }

  if (typeof collection === "object") {
    return _keys(collection).length;
  }

  throw new Error(
    `Cannot determine the size of a variable with a type of ${typeof collection}.`
  );
};

export default curry(size);
