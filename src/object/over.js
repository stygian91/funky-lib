import { lensSymbol } from "./lens";
import path from "./path";
import curry3 from "../function/curry3";

/**
 * Runs the transform function over the part of the data that the lens is focusing on.
 *
 * @param {object} lens
 * @param {function} transformFn
 * @param {any} data
 * @returns {any}
 * @see lens
 */
const over = (lens, transformFn, data) => {
  const setter = path([lensSymbol, "setter"], lens);
  const getter = path([lensSymbol, "getter"], lens);
  return setter(transformFn(getter(data)), data);
};

export default curry3(over);
