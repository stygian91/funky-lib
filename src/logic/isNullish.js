import curry from "../function/curry";

const isNullish = (arg) => arg === null || typeof arg === "undefined";
export default curry(isNullish);
