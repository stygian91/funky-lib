import curry2 from "./curry2";

/**
 * Memoizes a function where the key generator function
 * decides which cached result should be returned.
 *
 * @param {function} keyGenerator
 * @param {function} func
 */
const memoizeWith = (keyGenerator, func) => {
  const cache = {};

  return (...args) => {
    const key = keyGenerator(...args);
    if (!cache.hasOwnProperty(key)) {
      const result = func(...args);
      cache[key] = result;
    }

    return cache[key];
  };
};

export default curry2(memoizeWith);
