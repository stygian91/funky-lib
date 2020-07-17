import curry from "../function/curry";
import isNil from "./isNil";

const equal = (left, right) => {
  if (!isNil(left) && typeof left.equals === "function") {
    return left.equals(right);
  }

  return left === right;
};

export default curry(equal);
