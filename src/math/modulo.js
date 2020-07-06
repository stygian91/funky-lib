import curry from "../function/curry";

const modulo = (a, b) => {
  if (b === 0) {
    throw new Error("Modulo of 0 error.");
  }

  return a % b;
};

export default curry(modulo);
