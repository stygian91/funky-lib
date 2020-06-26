import curry from "../function/curry";

const lt = (left, right) => left < right;

export default curry(lt);
