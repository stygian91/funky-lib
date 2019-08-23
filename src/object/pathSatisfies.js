import get from 'lodash.get';
import curry from '../function/curry';

const pathSatisfies = (condFn, path, object) => !!condFn(get(object, path));

export default curry(pathSatisfies);
