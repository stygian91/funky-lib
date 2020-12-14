import curry1 from "../function/curry1";
import _objectForEach from "../internals/_objectForEach";

/**
 * Returns the values of all own enumerable property names and symbols.
 *
 * @param {object} obj
 * @returns {any[]}
 */
const values = (obj) => {
  const res = [];
  _objectForEach((val) => res.push(val), obj);
  return res;
};

export default curry1(values);
