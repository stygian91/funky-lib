import curry from '../function/curry';

const multiply = (termToMultiply, term) => term * termToMultiply;

export default curry(multiply);
