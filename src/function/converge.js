import map from "../list/map";
import curry from "./curry";

const converge = (convergingFn, branchingFns) => (...args) => {
  const branchResults = map(branchingFn => branchingFn(...args), branchingFns);
  return convergingFn(...branchResults);
};

export default curry(converge);
