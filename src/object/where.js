import prop from "./prop";
import curry from "../function/curry";
import always from "../function/always";
import pipe from "../function/pipe";
import propSatisfies from "./propSatisfies";
import allPass from "../logic/allPass";
import map from "../list/map";

const where = (specObject, testObject) => {
  const condFns = pipe(
    Object.keys,
    map(key => propSatisfies(prop(key, specObject), key, testObject)),
    map(always)
  )(specObject);

  return allPass(...condFns)();
};

export default curry(where);
