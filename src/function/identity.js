import curry from "./curry";

/**
 * The identity function just returns its first argument.
 *
 * @param {any} a
 * @returns {any}
 */
const identity = (a) => a;

export default curry(identity);
