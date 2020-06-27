import curry from "../function/curry";

const chunk = (size, list) => {
  if (size < 1) {
    throw new Error("Size must be a positive integer");
  }

  if (size >= list.length) {
    return [list.slice()];
  }

  const result = [];
  let begin = 0,
    end = size;
  while (begin < list.length) {
    result.push(list.slice(begin, end));
    begin += size;
    end += size;
  }

  return result;
};

export default curry(chunk);
