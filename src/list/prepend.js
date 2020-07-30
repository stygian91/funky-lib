import { curry } from "../";
import { insert } from "./";

const prepend = insert(0);

export default curry(prepend);
