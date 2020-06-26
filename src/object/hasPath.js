import curry from "../function/curry";
import _getPathArray from "../internals/_getPathArray";
import pathFn from "./path";

const hasPath = (path, object) => pathFn(path, object) !== undefined;

export default curry(hasPath);
