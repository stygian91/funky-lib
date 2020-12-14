import _objectFilter from "../internals/_objectFilter";
import curry2 from "../function/curry2";

/**
 * Creates a shallow copy of the object
 * with the element at `prop` removed.
 *
 * @see assoc
 * @param {string} prop
 * @param {object} object
 * @returns {object}
 */
const dissoc = (prop, object) =>
  _objectFilter((value, key) => key !== prop, object);

export default curry2(dissoc);
