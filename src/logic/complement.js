import curry1 from "../function/curry1";

/**
 * Creates a complementing funciton.
 * The new function will return true when the original function would have returned a falsy value
 * and false - when the original function would have returned a truthy value.
 *
 * @param {funciton} func
 * @returns {function}
 */
const complement =
  (func) =>
  (...args) =>
    func(...args) ? false : true;

export default curry1(complement);
