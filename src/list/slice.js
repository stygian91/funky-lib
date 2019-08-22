import curry from '../function/curry';

const slice = (begin, end, list) => list.slice(begin, end);

export default curry(slice);
