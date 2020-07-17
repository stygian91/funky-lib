import curry from "../function/curry";

const isNil = (arg) =>
  arg === null || typeof arg === "undefined" || Number.isNaN(arg);
export default curry(isNil);
