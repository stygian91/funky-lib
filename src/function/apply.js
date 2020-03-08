import curry from "./curry";

const apply = (func, args) => {
  return func.apply(void 0, args);
};

export default curry(apply);
