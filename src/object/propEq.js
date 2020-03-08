import propSatisfies from "./propSatisfies";
import equals from "../logic/equals";
import curry from "../function/curry";

const propEq = (propName, value, object) =>
  propSatisfies(equals(value), propName, object);

export default curry(propEq);
