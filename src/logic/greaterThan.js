import curry from "../function/curry";

const greaterThan = (left, right) => left > right;

export default curry(greaterThan);
