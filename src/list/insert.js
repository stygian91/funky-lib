import curry from "../function/curry";
import splice from "./splice";

const insert = (index, value, list) => splice(index, 0, [value], list);

export default curry(insert);
