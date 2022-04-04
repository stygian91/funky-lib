import curry1 from "../function/curry1";

const reduced = (x) => ({ [_reduced]: x });

export const _reduced = Symbol('reduced');

export const isReduced = (x) => x && typeof x[_reduced] !== 'undefined';

export default curry1(reduced);
