import curry from "../function/curry";

const propOr = (defaultValue, propName, object) => {
  const value = object[propName];
  return typeof value === 'undefined' ? defaultValue : value;
};

export default curry(propOr)
