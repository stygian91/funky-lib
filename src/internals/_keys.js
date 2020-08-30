const keys = (obj) => {
  if (typeof obj !== "object") {
    throw new Error("The argument of `keys` must be an object.");
  }

  return Object.getOwnPropertyNames(obj)
    .concat(Object.getOwnPropertySymbols(obj))
    .filter((key) => obj.propertyIsEnumerable(key));
};

export default keys;
