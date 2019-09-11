import curry from '../function/curry';
import pathOr from './pathOr';

export default curry((path, object) => pathOr(void 0, path, object));
