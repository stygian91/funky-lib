/**
 * Creates a nullary function that always returns the original argument.
 *
 * @param {any} arg
 * @returns {function}
 */
const always = (arg) => () => arg;

export default always;
