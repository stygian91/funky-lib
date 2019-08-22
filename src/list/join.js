import curry from "../function/curry";

const join = (glue, list) => list.join(glue);

export default curry(join);
