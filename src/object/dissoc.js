import _objectFilter from "../internals/_objectFilter";
import curry from "../function/curry";

const dissoc = (prop, object) =>
  _objectFilter((value, key) => key !== prop, object);

export default curry(dissoc);
