import curry from '../function/curry';

const subtract = (b, a) => a - b;

export default curry(subtract);
