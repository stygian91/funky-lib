import curry from "../function/curry";
import _getPathArray from "../internals/_getPathArray";
import dissoc from "./dissoc";
import assoc from "./assoc";
import isNullish from "../logic/isNullish";
import slice from "../list/slice";

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

  if (isNullish(object[prop])) {
    return { ...object };
  }

  return assoc(prop, dissocPath(remainingPath, object[prop]), object);
};

export default curry(dissocPath);
