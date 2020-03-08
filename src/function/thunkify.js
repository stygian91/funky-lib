import curry from "./curry";

const thunkify = func => (...args) => () => {
  return func(...args);
};

export default curry(thunkify);
