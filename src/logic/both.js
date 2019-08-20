import curry from '../function/curry';

const both = (f1, f2) => (...args) => f1(...args) && f2(...args);

export default curry(both);
