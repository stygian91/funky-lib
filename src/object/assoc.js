import curry from "../function/curry";

const assoc = (propName, value, object) => ({
  ...object,
  [propName]: value
});

export default curry(assoc);
