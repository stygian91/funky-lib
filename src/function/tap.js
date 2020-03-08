import curry from "./curry";

const tap = (func, arg) => {
  func(arg);
  return arg;
};

export default curry(tap);
