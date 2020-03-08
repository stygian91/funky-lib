import curry from "../function/curry";
import slice from "./slice";

const take = (numElements, list) => slice(0, numElements, list);

export default curry(take);
