import curry1 from "../function/curry1";
import split from "../string/split";

const _getPathArray = (path) => {
  if (typeof path === "string") {
    return split(".", path).filter((pathPart) => pathPart !== "");
  } else if (Array.isArray(path)) {
    return path;
  } else {
    throw new Error("Path must be either a dot-separated string or an array.");
  }
};

export default curry1(_getPathArray);
