import curry from "../function/curry";
import filter from "./filter";
import equals from "../logic/equals";
import findIndex from "./findIndex";

/**
 * Removes a list of values from the target list.
 * Equality comparisson is made with the `equals` function.
 *
 * @function
 * @name without
 * @see equals
 * @param {any[]} values
 * @param {any[]} list
 */
const without = (values, list) =>
  filter((val) => findIndex(equals(val), values) === -1, list);

export default curry(without);
