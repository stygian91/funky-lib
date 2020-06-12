import curry from "../function/curry";

const clamp = (min, max, value) => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

export default curry(clamp);
