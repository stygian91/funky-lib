import curry from "../function/curry";
import slice from "./slice";

const takeLast = (numElements, list) =>
  slice(-1 * numElements, list.length + 1, list);

export default curry(takeLast);
