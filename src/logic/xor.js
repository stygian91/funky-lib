import curry from "../function/curry";

const xor = (a, b) => !!(a ^ b);

export default curry(xor);
