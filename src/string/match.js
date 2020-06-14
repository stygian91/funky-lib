import curry from "../function/curry";

export default curry((regex, str) => str.match(regex));
