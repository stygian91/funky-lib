import curry from "../function/curry";
import filter from "./filter";
import equals from "../logic/equals";
import findIndex from "./findIndex";

const intersection = (list1, list2) =>
  filter((el) => findIndex(equals(el), list2) !== -1, list1);

export default curry(intersection);
