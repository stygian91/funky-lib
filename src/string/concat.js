import curry from "../function/curry";

const concat = (left, right) => {
  if (typeof left !== "string" || typeof right !== "string") {
    throw new Error("Both arguments must be of type string.");
  }

  return left.concat(right);
};

export default curry(concat);
