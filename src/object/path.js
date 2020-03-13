import curry from "../function/curry";
import pathOr from "./pathOr";
import Maybe from "../data-structures/maybe";

export default curry((path, object) => Maybe.of(pathOr(void 0, path, object)));
