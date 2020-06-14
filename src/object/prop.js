import curry from "../function/curry";

const prop = (propName, object) => object[propName];

export default curry(prop);
