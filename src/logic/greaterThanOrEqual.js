import curry from '../function/curry';

const gte = (left, right) => left >= right;

export default curry(gte);
