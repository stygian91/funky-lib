import curry from "../function/curry";
import findLastIndex from "./findLastIndex";

const findLast = (predicate, list) => {
  const index = findLastIndex(predicate, list);
  return index === -1 ? void 0 : list[index];
};

export default curry(findLast);
