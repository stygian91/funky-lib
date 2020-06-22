import map from "../list/map";
import curry from "../function/curry";

const pick = (props, object) => {
  const result = {};

  map((key) => {
    const value = object[key];
    if (typeof value !== "undefined") {
      result[key] = value;
    }
  }, props);

  return result;
};

export default curry(pick);
