import { curry } from "../function";
import { size, insert } from "./";

const append = (value, list) => insert(size(list), value, list);

export default curry(append);
