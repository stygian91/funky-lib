import curry from '../function/curry';
import get from 'lodash.get';

export default curry((path, object) => get(object, path));
