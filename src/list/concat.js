import curry from "../function/curry";

const concat = (left, right) => {
  if (!Array.isArray(left) || !Array.isArray(right)) {
    throw new Error('Both arguments must be arrays.');
  }

  return left.concat(right);
}

export default curry(concat);
