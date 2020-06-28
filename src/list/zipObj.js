import curry from "../function/curry";

const zipObj = (keys, values) => {
  const length = keys.length < values.length ? keys.length : values.length;

  const result = {};
  for (let index = 0; index < length; index++) {
    result[keys[index]] = values[index];
  }
  return result;
};

export default curry(zipObj);
