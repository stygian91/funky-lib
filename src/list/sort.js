import curry from "../function/curry";

const sort = (predicate, list) => list.slice().sort(predicate);

export default curry(sort);
