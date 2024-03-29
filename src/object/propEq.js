import propSatisfies from "./propSatisfies";
import equals from "../logic/equals";
import curry3 from "../function/curry3";

/**
 * Checks if the prop equals the specified value.
 * The comparisson is done using the `equals` function.
 *
 * @param {string} propName
 * @param {any} value
 * @param {object} object
 * @returns {boolean}
 */
const propEq = (propName, value, object) =>
  propSatisfies(equals(value), propName, object);

export default curry3(propEq);
