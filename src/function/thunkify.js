import curry from "./curry";

const thunkify = func => (...args) => () => func(...args);

export default curry(thunkify);
