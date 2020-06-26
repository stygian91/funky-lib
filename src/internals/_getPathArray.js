import curry from "../function/curry";
import split from "../string/split";
import filter from "../list/filter";

const _getPathArray = (path) => {
  if (typeof path === "string") {
    return filter((pathPart) => pathPart !== "", split(".", path));
  } else if (Array.isArray(path)) {
    return path;
  } else {
    throw new Error("Path must be either a dot-separated string or an array.");
  }
};

export default curry(_getPathArray);
