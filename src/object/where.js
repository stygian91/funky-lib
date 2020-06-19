import prop from "./prop";
import curry from "../function/curry";
import pipe from "../function/pipe";
import id from "../function/identity";
import propSatisfies from "./propSatisfies";
import all from "../list/all";
import map from "../list/map";

const where = (specObject, testObject) =>
  pipe(
    Object.keys,
    map((key) => propSatisfies(prop(key, specObject), key, testObject)),
    all(id)
  )(specObject);

export default curry(where);
