import curry from "../function/curry";
import reduce from "../list/reduce";
import concat from "../list/concat";
import map from "../list/map";

const ap = (applyF, applyX) => {
  if (typeof applyF.ap === "function") {
    return applyF.ap(applyX);
  }

  if (typeof applyF === "function") {
    return (x) => applyF(x, applyX(x));
  }

  return reduce((acc, f) => concat(acc, map(f, applyX)), [], applyF);
};

export default curry(ap);
