import curry from "../function/curry";

const insert = (index, value, list) => {
  const clone = list.slice();
  clone.splice(index, 0, value);
  return clone;
};

export default curry(insert);
