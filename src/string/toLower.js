import { curry } from "../function";

const toLower = str => str.toLowerCase();

export default curry(toLower);
