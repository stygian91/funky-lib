import curry from "./curry";

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

export default curry(memoizeWith);
