import curry from "../function/curry";
import forEach from "./forEach";

const flatten = (list) => {
  const result = [];

  forEach((value) => {
    if (Array.isArray(value)) {
      forEach((innerValue) => result.push(innerValue), flatten(value));
    } else {
      result.push(value);
    }
  }, list);

  return result;
};

export default curry(flatten);
