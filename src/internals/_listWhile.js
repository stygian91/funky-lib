import curry3 from "../function/curry3";

const _listWhile = (condFn, iterationFn, list) => {
  for (let index = 0; index < list.length; index++) {
    const value = list[index];
    if (!condFn(value, index, list)) {
      return;
    }

    iterationFn(value, index, list);
  }
};

export default curry3(_listWhile);
