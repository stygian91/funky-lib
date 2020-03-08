import curry from "../function/curry";

const equal = (left, right) => {
  if (left && typeof left.equals === "function") {
    return left.equals(right);
  }

  return left === right;
};

export default curry(equal);
