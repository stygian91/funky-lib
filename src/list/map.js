import curry from '../function/curry';

const map = (func, list) => list.map(func);

export default curry(map);
