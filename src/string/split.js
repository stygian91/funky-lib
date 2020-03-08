import curry from "../function/curry";

const split = (delimiter, string) => string.split(delimiter);

export default curry(split);
