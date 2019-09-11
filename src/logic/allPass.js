import curry from '../function/curry';
import reduceWhile from '../list/reduceWhile';
import identity from '../function/identity';

const allPass = (...funcs) => (...args) => reduceWhile(
  identity,
  (acc, current) => acc && current(...args),
  true,
  funcs
);

export default curry(allPass);
