import curry from "./curry";

/**
 * Creates a variadic function from a unary function that accepts a list.
 *
 * @param {function} func
 * @returns {function}
 */
const unapply = (func) => (...args) => func(args);

export default curry(unapply);
