import curry from '../function/curry';

const either = (f1, f2) => (...args) => f1(...args) || f2(...args);

export default curry(either);
