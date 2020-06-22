import curry from "../function/curry";

const findLast = (conditionFn, list) => {
  for (let index = list.length; index >= 0; index--) {
    if (conditionFn(list[index], index, list)) {
      return list[index];
    }
  }

  return void 0;
};

export default curry(findLast);
