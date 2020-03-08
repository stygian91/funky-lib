import curry from "../function/curry";

const groupBy = (groupFn, list) => {
  const result = {};

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const key = groupFn(element, index);

    if (!result.hasOwnProperty(key)) {
      result[key] = [];
    }

    result[key].push(element);
  }

  return result;
};

export default curry(groupBy);
