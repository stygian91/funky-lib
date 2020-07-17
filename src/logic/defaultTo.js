import isNil from "./isNil";
import when from "./when";
import always from "../function/always";
import curry from "../function/curry";

const defaultTo = (def, value) => when(isNil, always(def), value);

export default curry(defaultTo);
