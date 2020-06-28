import curry from "../function/curry";

const zip = (list1, list2) => {
  const length = list1.length < list2.length ? list1.length : list2.length;

  const result = [];
  for (let index = 0; index < length; index++) {
    result.push([list1[index], list2[index]]);
  }

  return result;
};

export default curry(zip);
