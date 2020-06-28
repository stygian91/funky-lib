import curry from "../function/curry";
import isNullish from "./isNullish";

const equal = (left, right) => {
  if (!isNullish(left) && typeof left.equals === "function") {
    return left.equals(right);
  }

  return left === right;
};

export default curry(equal);
