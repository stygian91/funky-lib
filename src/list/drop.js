import curry from "../function/curry";
import splice from "./splice";

const drop = (index, list) => splice(index, 1, [], list);

export default curry(drop);
