import curry1 from "../function/curry1";

/**
 * Wraps an argument in an array
 *
 * @function
 * @param {any} arg
 * @returns {any[]}
 */
const of = curry1((arg) => [arg]);

export default of;
