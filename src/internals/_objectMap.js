import curry from "../function/curry";

const _objectMap = (func, object) => {
  const result = {};

  for (const key in object) {
    const element = object[key];
    result[key] = func(element, key, object);
  }

  return result;
};

export default curry(_objectMap);
