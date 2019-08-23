import get from 'lodash.get';
import curry from '../function/curry';

const pathOr = (defaultValue, path, object) => get(object, path, defaultValue);

export default curry(pathOr);
