import curry from "../function/curry";
import Maybe from "../data-structures/maybe";

const prop = (propName, object) => Maybe.of(object[propName]);

export default curry(prop);
