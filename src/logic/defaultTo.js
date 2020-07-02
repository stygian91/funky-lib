import isNullish from "./isNullish";
import when from "./when";
import always from "../function/always";
import curry from "../function/curry";

const defaultTo = (def, value) => when(isNullish, always(def), value);

export default curry(defaultTo);
