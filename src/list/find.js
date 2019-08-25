import curry from "../function/curry";

const find = (condFn, list) => list.find(condFn);

export default curry(find);
