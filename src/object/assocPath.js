import _getPathArray from "../internals/_getPathArray";
import propOr from "./propOr";
import slice from "../list/slice";
import assoc from "./assoc";
import curry3 from "../function/curry3";

/**
 * Creates a shallow copy of the object and sets
 * the value at the specified path.
 * The path can be specified as a dot-separated string
 * or a list of strings.
 *
 * @see dissocPath
 * @param {string|string[]} path
 * @param {any} value
 * @param {object} object
 * @returns {object}
 */
const assocPath = (path, value, object) => {
  const pathArray = _getPathArray(path);
  if (pathArray.length === 0) {
    return value;
  }

  const prop = pathArray[0];
  const nextObject = propOr({}, prop, object);
  const newValue = assocPath(
    slice(1, pathArray.length, pathArray),
    value,
    nextObject,
  );
  return assoc(prop, newValue, object);
};

export default curry3(assocPath);
