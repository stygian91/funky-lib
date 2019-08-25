import curry from '../function/curry';
import _objectFilter from '../internals/_objectFilter';

const filter = (func, list) => {
  if (typeof list['filter'] === 'function') {
    return list.filter(func);
  }

  if (typeof list === 'object') {
    return _objectFilter(func, list);
  }

  throw new Error('Argument is not filterable.');
};

export default curry(filter);
