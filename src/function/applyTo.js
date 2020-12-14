import curry2 from "./curry2";

/**
 * Takes a value and a function and applies the function to the value.
 * With curry2ing, this allows for the creation of a function that always supplies the same value for different operations.
 *
 * @param {any} x
 * @param {function} fn
 * @returns {any}
 */
const applyTo = (x, fn) => fn(x);

export default curry2(applyTo);
