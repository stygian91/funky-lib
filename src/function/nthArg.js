import curry from "./curry";

const nthArg = index => (...args) => {
  if (index >= 0) {
    return args[index];
  }

  return args[args.length + index];
};

export default curry(nthArg);
