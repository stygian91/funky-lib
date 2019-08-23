import reduce from './reduce';
import curry from '../function/curry';

const all = (condFn, list) => reduce((acc, current) => acc && condFn(current), true, list);

export default curry(all);
