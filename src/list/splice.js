import curry from "../function/curry";

const splice = (index, deleteCount, newElements, list) => {
  const clone = list.slice();
  clone.splice(index, deleteCount, ...newElements);
  return clone;
};

export default curry(splice);
