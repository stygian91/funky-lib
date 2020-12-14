import curry2 from "../function/curry2";

/**
 * Executes `fn` n times and returns its results as a list.
 * The predicate is passed the current iteration number as its only argument,
 * which ranges from 0 to n - 1.
 *
 * @param {function} fn
 * @param {integer} n
 * @returns {any[]}
 */
const times = (fn, n) => {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push(fn(i));
  }

  return results;
};

export default curry2(times);
