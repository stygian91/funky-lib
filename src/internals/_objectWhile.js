import curry from "../function/curry";

const _objectWhile = (condFn, iterationFn, object) => {
  const ownProps = Object.getOwnPropertyNames(object)
    .concat(Object.getOwnPropertySymbols(object))
    .filter(key => object.propertyIsEnumerable(key));

  for (let index = 0; index < ownProps.length; index++) {
    const key = ownProps[index];
    const value = object[key];
    if (!condFn(value, key, object)) {
      return;
    }

    iterationFn(value, key, object);
  }
};

export default curry(_objectWhile);
