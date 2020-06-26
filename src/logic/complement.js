import curry from "../function/curry";

const complement = (func) => (...args) => (func(...args) ? false : true);

export default curry(complement);
