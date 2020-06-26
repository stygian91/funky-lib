import curry from "../function/curry";
import reduceWhile from "../list/reduceWhile";
import _getPathArray from "../internals/_getPathArray";

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

export default curry(pathOr);
