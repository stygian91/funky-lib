import curry from "../function/curry";

const drop = (index, list) => {
  const clone = list.slice();
  clone.splice(index, 1);
  return clone;
};

export default curry(drop);
