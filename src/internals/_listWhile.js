import curry from "../function/curry";

const _listWhile = (condFn, iterationFn, list) => {
  for (let index = 0; index < list.length; index++) {
    const value = list[index];
    if (!condFn(value, index, list)) {
      return;
    }

    iterationFn(value, index, list);
  }
};

export default curry(_listWhile);
