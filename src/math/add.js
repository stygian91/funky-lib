import curry from "../function/curry";

const add = (a, b) => a + b;

export default curry(add);
