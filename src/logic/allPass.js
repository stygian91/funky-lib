import curry from '../function/curry';

const allPass = (...funcs) => (...args) => funcs.reduce((accumulator, current) => accumulator && current(...args), true);

export default curry(allPass);
