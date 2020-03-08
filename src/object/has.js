import curry from "../function/curry";

const has = (prop, object) => object.hasOwnProperty(prop);

export default curry(has);
