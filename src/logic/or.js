import curry from "../function/curry";

const or = (a, b) => a || b;

export default curry(or);
