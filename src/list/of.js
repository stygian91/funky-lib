import curry from "../function/curry";

/**
 * Wraps an argument in an array
 *
 * @function
 * @param {any} arg
 * @returns {any[]}
 */
const of = curry((arg) => [arg]);

export default of;
