import propSatisfies from './propSatisfies';
import equal from '../logic/equal';
import curry from '../function/curry';

const propEq = (propName, value, object) => propSatisfies(equal(value), propName, object);

export default curry(propEq);
