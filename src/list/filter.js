import curry from "../function/curry";
import _objectFilter from "../internals/_objectFilter";
import _stringFilter from "../internals/_stringFilter";

const filter = (func, list) => {
  if (typeof list["filter"] === "function") {
    return list.filter(func);
  }

  if (typeof list === "object") {
    return _objectFilter(func, list);
  }

  if (typeof list === "string") {
    return _stringFilter(func, list);
  }

  throw new Error("Argument is not filterable.");
};

export default curry(filter);
