import curry from "../function/curry";

/**
 * Generates a list based on a seed and an iterator function.
 * The iterator function accepts a single argument - a seed.
 * The iterator needs to return either `false` to stop the generation or an array of 2 elements.
 * The first element in the array is the value that's going to be appended to the result,
 * while the second element is the seed for the next iteration.
 *
 * @param {function} fn
 * @param {any} seed
 * @returns {any[]}
 */
const unfold = (fn, seed) => {
  let tuple = fn(seed);
  const result = [];

  while (tuple && Array.isArray(tuple)) {
    result.push(tuple[0]);
    tuple = fn(tuple[1]);
  }

  return result;
};

export default curry(unfold);
