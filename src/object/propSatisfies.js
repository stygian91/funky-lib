import curry from "../function/curry";
import propOr from "./propOr";

const propSatisfies = (conditionFn, propName, object) =>
  conditionFn(propOr(void 0, propName, object));

export default curry(propSatisfies);
