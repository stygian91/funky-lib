import curry2 from "../function/curry2";
import _getPathArray from "../internals/_getPathArray";
import dissoc from "./dissoc";
import assoc from "./assoc";
import isNil from "../logic/isNil";
import slice from "../list/slice";

/**
 * Creates a shallow copy of the object
 * with the element at the specified path removed.
 *
 * @see assocPath
 * @param {string|string[]} path
 * @param {object} object
 * @returns {object}
 */
const dissocPath = (path, object) => {
  const pathArray = _getPathArray(path);
  if (pathArray.length === 0) {
    return { ...object };
  }

  const prop = pathArray[0];
  const remainingPath = slice(1, pathArray.length, pathArray);

  if (pathArray.length === 1) {
    return dissoc(prop, object);
  }

  if (isNil(object[prop])) {
    return { ...object };
  }

  return assoc(prop, dissocPath(remainingPath, object[prop]), object);
};

export default curry2(dissocPath);
