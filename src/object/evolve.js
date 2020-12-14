import map from "../list/map";
import prop from "./prop";
import curry2 from "../function/curry2";

/**
 * Creates a new object by going through the spec object/list recursively
 * and transforming the corresponding element in the target object.
 *
 * @param {object|any[]} spec
 * @param {object|any[]} object
 * @returns {object|any[]}
 */
const evolve = (spec, object) =>
  map((value, key) => {
    const transform = prop(key, spec);

    if (typeof transform === "function") {
      return transform(value);
    }

    if (typeof transform === "object" && typeof value === "object") {
      return evolve(transform, value);
    }

    return value;
  }, object);

export default curry2(evolve);
