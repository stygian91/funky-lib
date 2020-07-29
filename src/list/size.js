import { curry } from "../function";

const size = (collection) => {
  if(Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  }

  if(typeof collection === "object") {
    return Object.getOwnPropertyNames(collection).length + Object.getOwnPropertySymbols(collection).length;
  }

  throw new Error(`Cannot determine the size of a variable with a type of ${typeof collection}.`);
}

export default curry(size);
