import curry from "../function/curry";

const unless = (conditionFn, elseFn, arg) =>
  conditionFn(arg) ? arg : elseFn(arg);

export default curry(unless);
