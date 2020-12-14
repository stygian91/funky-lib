import curry1 from "./curry1";

/**
 * Creates a descending comparator function to be used with the sort function.
 * The `fn` argument must be a unary function that returns a value
 * that can be compared using the `>` and `<` operators,
 * this value will be used for the comparison.
 *
 * @see sort
 * @see ascend
 * @param {function} fn
 * @returns {function}
 */
const descend = (fn) => (a, b) => {
  const a1 = fn(a);
  const b1 = fn(b);

  return a1 < b1 ? 1 : a1 > b1 ? -1 : 0;
};

export default curry1(descend);
