import curry from "../function/curry";
import pathFn from "./path";

const hasPath = (path, object) => pathFn(path, object) !== undefined;

export default curry(hasPath);
