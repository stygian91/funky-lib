import curry from './curry';

const then = (onSuccess, promise) => promise.then(onSuccess);

export default curry(then);
