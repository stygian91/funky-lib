import curry from '../function/curry';

const reduceWhile = (condFn, reducer, initialValue, list) => {
  let accumulator = initialValue;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (!condFn(accumulator, element, index, list)) {
      return accumulator;
    }

    accumulator = reducer(accumulator, element, index, list);
  }

  return accumulator;
}

export default curry(reduceWhile);
