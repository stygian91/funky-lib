import curry from "../function/curry";

const _objectMap = (func, object) => {
  const result = {};

  const iteratee = key => {
    if (!object.propertyIsEnumerable(key)) {
      return;
    }

    const element = object[key];
    result[key] = func(element, key, object);
  };

  Object.getOwnPropertyNames(object).forEach(iteratee);
  Object.getOwnPropertySymbols(object).forEach(iteratee);

  return result;
};

export default curry(_objectMap);
