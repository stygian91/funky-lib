import curry from '../function/curry';
import _listReduceWhile from '../internals/_listReduceWhile';
import _objectReduceWhile from '../internals/_objectReduceWhile';
import _stringReduceWhile from '../internals/_stringReduceWhile';

const reduceWhile = (condFn, reducer, initialValue, list) => {
  if (Array.isArray(list)) {
    return _listReduceWhile(condFn, reducer, initialValue, list);
  }

  if (typeof list === 'object') {
    return _objectReduceWhile(condFn, reducer, initialValue, list);
  }

  if (typeof list === 'string') {
    return _stringReduceWhile(condFn, reducer, initialValue, list);
  }

  throw new Error('Argument is not reducable.');
}

export default curry(reduceWhile);
