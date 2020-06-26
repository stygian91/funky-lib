import _getPathArray from "../internals/_getPathArray";
import propOr from "./propOr";
import slice from "../list/slice";
import assoc from "./assoc";
import curry from "../function/curry";

const assocPath = (path, value, object) => {
  const pathArray = _getPathArray(path);
  if (pathArray.length === 0) {
    return value;
  }

  const prop = pathArray[0];
  const nextObject = propOr({}, prop, object);
  value = assocPath(slice(1, pathArray.length, pathArray), value, nextObject);
  return assoc(prop, value, object);
};

export default curry(assocPath);
