import curry from "../function/curry";

export default curry((regex, str) => regex.test(str));
