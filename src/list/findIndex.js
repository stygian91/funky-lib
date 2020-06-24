import curry from "../function/curry";

const findIndex = (predicate, list) => {
  for (let index = 0; index < list.length; index++) {
    const value = list[index];
    if (predicate(value, index, list)) {
      return index;
    }
  }

  return -1;
};

export default curry(findIndex);
