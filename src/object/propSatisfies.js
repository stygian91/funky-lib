import curry from '../function/curry';


const propSatisfies = (conditionFn, propName, object) => conditionFn(object[propName]);

export default curry(propSatisfies);
