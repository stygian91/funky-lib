import path from "./path";
import { lensSymbol } from "./lens";
import curry2 from "../function/curry2";

/**
 * Returns the specific part of the data that the lens is focusing on.
 *
 * @param {object} lens
 * @param {any} data
 * @returns {any}
 * @see lens
 */
const view = (lens, data) => {
  const getter = path([lensSymbol, "getter"], lens);
  return getter(data);
};

export default curry2(view);
