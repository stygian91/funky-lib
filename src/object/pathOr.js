import curry3 from "../function/curry3";
import reduceWhile from "../list/reduceWhile";
import _getPathArray from "../internals/_getPathArray";

/**
 * Returns the value at the given path or a default value if the path doesn't exist.
 * The path can be specified as a dot-separated string or a list of strings.
 *
 * @param {any} defaultValue
 * @param {string|string[]} path
 * @param {object} object
 * @returns {object}
 */
const pathOr = (defaultValue, path, object) => {
  const pathArray = _getPathArray(path);

  const value = reduceWhile(
    (acc) => typeof acc !== "undefined",
    (acc, key) => acc[key],
    object,
    pathArray
  );

  return typeof value === "undefined" ? defaultValue : value;
};

export default curry3(pathOr);
