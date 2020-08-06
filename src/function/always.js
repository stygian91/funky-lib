/**
 * Creates a nullary function that always returns the original argument.
 *
 * @param {any} arg
 * @returns {any}
 */
const always = (arg) => () => arg;

export default always;
