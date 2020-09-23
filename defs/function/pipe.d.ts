export default pipe;
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
declare function pipe(...funcs: Function[]): Function;
