import curry from '../function/curry';

const subtract = (a, b) => a - b;

export default curry(subtract);
