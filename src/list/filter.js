import curry from '../function/curry';

const filter = (func, list) => list.filter(func);

export default curry(filter);
