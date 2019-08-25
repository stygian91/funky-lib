import _objectForEach from './_objectForEach';
import curry from '../function/curry';

const _objectFilter = (filterFn, object) => {
  const result = {};

  const iterationFn = (value, key, obj) => {
    if (!filterFn(value, key, obj)) {
      return;
    }

    result[key] = value;
  };

  _objectForEach(
    iterationFn,
    object
  );

  return result;
}

export default curry(_objectFilter);
