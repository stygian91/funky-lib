import curry from "./curry";

const unapply = func => (...args) => func(args);

export default curry(unapply);
