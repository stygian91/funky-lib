import curry from "../function/curry";
import forEach from "../list/forEach";

const _flatten = (recursive, list) => {
  const result = [];

  forEach((value) => {
    if (Array.isArray(value)) {
      forEach(
        (innerValue) => result.push(innerValue),
        recursive ? _flatten(true, value) : value
      );
    } else {
      result.push(value);
    }
  }, list);

  return result;
};

export default curry(_flatten);
