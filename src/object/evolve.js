import map from "../list/map";
import prop from "./prop";
import curry from "../function/curry";

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

export default curry(evolve);
