import { forEach } from ".";
import { curry } from "../function";

const keyWith = (keyFn, list) => {
  const object = {};

  forEach((value, index, ls) => {
    object[keyFn(value, index, ls)] = value;
  }, list);

  return object;
};

export default curry(keyWith);
