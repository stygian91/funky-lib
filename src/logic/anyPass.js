import curry from '../function/curry';

const anyPass = (...funcs) => (...args) => funcs.reduce((accumulator, current) => accumulator || current(...args), false);

export default curry(anyPass);
