import curry from '../function/curry';

const when = (conditionFn, thenFn) => (arg) => conditionFn(arg) ? thenFn(arg) : arg;

export default curry(when);
