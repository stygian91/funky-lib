import curry from "../function/curry";

/**
 * Joins the elements of a list into a string
 * with the "glue" string inbetween each element.
 * Defers to [Array.prototype.join]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join}
 *
 * @param {*} glue
 * @param {*} list
 */
const join = (glue, list) => list.join(glue);

export default curry(join);
