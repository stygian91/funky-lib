import curry from "../function/curry";

const nth = (n, list) => {
  if (n >= 0) {
    return list[n];
  }

  return list[list.length + n];
};

export default curry(nth);
