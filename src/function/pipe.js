/**
 * Takes a variable list of functions and returns a new function
 * that is a composition of all the functions that were passed.
 * The functions are called left-to-right.
 * The left-most function may have any arity, while the rest must be unary.
 * An example with three functions (f, g, h) => (...args) => f(g(h(...args)))
 *
 * @param  {...function} funcs
 * @returns {function}
 */
const pipe = (...funcs) => (...args) => {
  if (funcs.length === 0) {
    throw new Error("No functions provided.");
  }

  const result = funcs.reduce(
    (prevResult, currentFn) => [currentFn(...prevResult)],
    args
  );

  return result[0];
};

export default pipe;
