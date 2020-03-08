import curry from "../function/curry";
import _objectMap from "../internals/_objectMap";
import _stringMap from "../internals/_stringMap";

const map = (func, list) => {
  if (typeof list["map"] === "function") {
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

export default curry(map);
