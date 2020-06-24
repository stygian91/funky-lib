import curry from "../function/curry";

const findLastIndex = (predicate, list) => {
  for (let index = list.length; index >= 0; index--) {
    const value = list[index];
    if (predicate(value, index, list)) {
      return index;
    }
  }

  return -1;
};

export default curry(findLastIndex);
