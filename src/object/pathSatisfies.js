import pathFn from "./path";
import curry from "../function/curry";

const pathSatisfies = (condFn, path, object) =>
  !!pathFn(path, object).chain(condFn);

export default curry(pathSatisfies);
