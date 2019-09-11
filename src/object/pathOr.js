import curry from '../function/curry';
import reduceWhile from '../list/reduceWhile';
import split from '../string/split';

const pathOr = (defaultValue, path, object) => {
  if (typeof path === 'string') {
    path = split('.', path);
  }

  const value = reduceWhile(
    (acc) => typeof acc !== 'undefined',
    (acc, key) => acc[key],
    object,
    path
  );

  return typeof value === 'undefined' ? defaultValue : value;
};

export default curry(pathOr);
