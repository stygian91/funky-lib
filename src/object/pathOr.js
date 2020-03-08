import curry from "../function/curry";
import reduceWhile from "../list/reduceWhile";
import split from "../string/split";

const pathOr = (defaultValue, path, object) => {
  let pathArray;
  if (typeof path === "string") {
    pathArray = split(".", path);
  } else if (Array.isArray(path)) {
    pathArray = path;
  } else {
    throw new Error("Path must be either a dot-separated string or an array.");
  }

  const value = reduceWhile(
    acc => typeof acc !== "undefined",
    (acc, key) => acc[key],
    object,
    pathArray
  );

  return typeof value === "undefined" ? defaultValue : value;
};

export default curry(pathOr);
