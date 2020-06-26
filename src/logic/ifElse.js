import curry from "../function/curry";

const ifElse = (conditionFn, thenFn, otherwiseFn) => (...args) =>
  conditionFn(...args) ? thenFn(...args) : otherwiseFn(...args);

export default curry(ifElse);
