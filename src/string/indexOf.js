import { curry } from "../function";

const indexOf = (search, fromIndex, str) => str.indexOf(search, fromIndex);

export default curry(indexOf);
