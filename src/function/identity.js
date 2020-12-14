import curry1 from "./curry1";

/**
 * The identity function just returns its first argument.
 *
 * @param {any} a
 * @returns {any}
 */
const identity = (a) => a;

export default curry1(identity);
