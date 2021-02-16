import filter from "../list/filter";
import findIndex from "../list/findIndex";
import curry2 from "../function/curry2";

const omit = (keys, object) =>
  filter((value, key) => findIndex((searchKey) => searchKey === key, keys) === -1, object);

export default curry2(omit);
