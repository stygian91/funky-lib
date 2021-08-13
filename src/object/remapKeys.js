import curry2 from "../function/curry2";
import forEach from "../list/forEach";
import pathOr from "./pathOr";

/**
 * Rename the keys of an object based on the mapping from another object.
 * The keys in the mapping object should correspond to the keys in the data object that need to be updated.
 * While the values in the map will be the new names.
 * Any keys in the map, that don't exist in the data, will be ignored.
 * The returned object is a shallow copy, the original data will be untouched.
 *
 * @param {object} mappings
 * @param {object} object
 * @returns
 */
const remapKeys = (mappings, object) => {
  const result = {};

  forEach((value, key) => {
    const newKey = pathOr(key, key, mappings);
    result[newKey] = value;
  }, object);

  return result;
};

export default curry2(remapKeys);
