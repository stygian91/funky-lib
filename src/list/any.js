import reduce from "./reduce";
import curry from "../function/curry";

const any = (condFn, list) =>
  reduce((acc, current) => acc || condFn(current), false, list);

export default curry(any);
