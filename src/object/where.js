import prop from "./prop";
import curry2 from "../function/curry2";
import pipe from "../function/pipe";
import id from "../function/identity";
import propSatisfies from "./propSatisfies";
import all from "../list/all";
import map from "../list/map";
import keys from "./keys";

/**
 * Checks if all of the condition functions in the spec object pass.
 *
 * @param {object} specObject
 * @param {object} testObject
 * @returns {boolean}
 */
const where = (specObject, testObject) =>
  pipe(
    keys,
    map((key) => propSatisfies(prop(key, specObject), key, testObject)),
    all(id)
  )(specObject);

export default curry2(where);
