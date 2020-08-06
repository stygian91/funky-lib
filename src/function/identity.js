import curry from "./curry";

/**
 * The identity function just returns its first argument.
 *
 * @name identity
 * @param {any} a
 * @returns {any}
 */
const id = (a) => a;

export default curry(id);
