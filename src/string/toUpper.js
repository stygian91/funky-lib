import { curry } from '../function';

const toUpper = str => str.toUpperCase();

export default curry(toUpper);
