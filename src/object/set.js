import { lensSymbol } from "./lens";
import path from "./path";
import curry3 from "../function/curry3";

/**
 * Sets the value that the lens is focusing on by calling the lens setter.
 *
 * @param {object} lens
 * @param {any} value
 * @param {any} data
 * @returns {any}
 * @see lens
 */
const set = (lens, value, data) => {
  const setter = path([lensSymbol, "setter"], lens);
  return setter(value, data);
};

export default curry3(set);
