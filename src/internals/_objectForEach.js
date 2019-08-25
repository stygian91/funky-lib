import curry from "../function/curry";

const _objectForEach = (iterationFn, object) => {
  const _iterationFn = (key) => {
    if (!object.propertyIsEnumerable(key)) {
      return;
    }

    iterationFn(object[key], key, object);
  };

  Object.getOwnPropertyNames(object).forEach(_iterationFn);
  Object.getOwnPropertySymbols(object).forEach(_iterationFn);
};

export default curry(_objectForEach);
