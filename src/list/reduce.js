import curry from '../function/curry';

const reduce = (func, initialValue, list) => list.reduce(func, initialValue);

export default curry(reduce);
