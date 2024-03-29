import curry3 from "../function/curry3";
import _keys from "./_keys";

const _objectWhile = (condFn, iterationFn, object) => {
  const ownProps = _keys(object);

  for (let index = 0; index < ownProps.length; index++) {
    const key = ownProps[index];
    const value = object[key];
    if (!condFn(value, key, object)) {
      return;
    }

    iterationFn(value, key, object);
  }
};

export default curry3(_objectWhile);
