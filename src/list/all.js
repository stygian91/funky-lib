import reduce from './reduce';
import curry from '../function/curry';

const all = (condFn, list) => reduce((acc, current, index, list) => acc && condFn(current, index, list), true, list);

export default curry(all);
