import { curry } from "../function";

/**
 * Returns a new list or string (depending on the argument)
 * with its order reversed.
 *
 * @param {any[]|string} listOrStr
 * @returns {any[]|string}
 */
const reverse = (listOrStr) => {
  if (Array.isArray(listOrStr)) {
    return listOrStr.slice().reverse();
  }

  return listOrStr.split("").reverse().join("");
};

export default curry(reverse);
