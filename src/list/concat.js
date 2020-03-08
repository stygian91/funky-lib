import curry from "../function/curry";

const concat = (left, right) => {
  if (
    !(Array.isArray(left) && Array.isArray(right)) &&
    !(typeof left === "string" && typeof right === "string")
  ) {
    throw new Error("Arguments must be either both arrays or both strings.");
  }

  return left.concat(right);
};

export default curry(concat);
