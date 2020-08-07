import pipe from "./pipe";
import flip from "./flip";

/**
 * Takes a variable list of functions and returns a new function
 * that is a composition of all the functions that were passed.
 * The functions are called right-to-left.
 * The right-most function may have any arity, while the rest must be unary.
 * An example with three functions (f, g, h) => (...args) => h(g(f(...args)))
 *
 * @function
 * @param  {...function} funcs
 * @returns {function}
 */
const compose = flip(pipe);

export default compose;
