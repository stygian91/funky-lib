import { curry } from "../function";

const reverse = (listOrStr) => {
  if (Array.isArray(listOrStr)) {
    return listOrStr.slice().reverse();
  }

  return listOrStr.split("").reverse().join("");
};

export default curry(reverse);
