import pathFn from "./path";
import curry from "../function/curry";

const pathSatisfies = (condFn, path, object) => !!condFn(pathFn(path, object));

export default curry(pathSatisfies);
