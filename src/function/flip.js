import curry from "./curry";

const flip = func => (...args) => func(...args.reverse());

export default curry(flip);
