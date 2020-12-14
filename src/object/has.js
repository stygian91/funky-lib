import curry2 from "../function/curry2";

/**
 * Checks an object contains a prop.
 *
 * @param {string} prop
 * @param {object} object
 * @returns {boolean}
 */
const has = (prop, object) =>
  object !== null &&
  typeof object !== "undefined" &&
  object.hasOwnProperty(prop);

export default curry2(has);
