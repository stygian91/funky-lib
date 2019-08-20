import curry from '../function/curry';

const lte = (left, right) => left <= right;

export default curry(lte);
