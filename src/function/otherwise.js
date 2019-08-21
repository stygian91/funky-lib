import curry from "./curry";

const otherwise = (onFailure, promise) => promise.catch(onFailure);

export default curry(otherwise);
