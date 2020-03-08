import curry from "../function/curry";

const adjust = (index, transformFn, list) => {
  const _index = index >= 0 ? index : list.length + index;
  const newList = list.slice();
  newList[_index] = transformFn(newList[_index]);
  return newList;
};

export default curry(adjust);
