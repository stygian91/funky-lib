import curry from "../function/curry";

/**
 * Slices an array from begin to end.
 * Defers to the `list.slice` method.
 * See the documentation about [Array.prototype.slice]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 * and [String.prototype.slice]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice}
 *
 * @param {number} begin
 * @param {number} end
 * @param {any[]|string} list
 * @returns {any[]|string}
 */
const slice = (begin, end, list) => list.slice(begin, end);

export default curry(slice);
