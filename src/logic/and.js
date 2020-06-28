import curry from "../function/curry";

const and = (a, b) => a && b;

export default curry(and);
