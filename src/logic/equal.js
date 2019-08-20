import curry from '../function/curry';

const equal = (left, right) => left === right;

export default curry(equal);
