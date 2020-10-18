import curry from "../function/curry";

/**
 * Splits a list into a groups of smaller lists with the provided size.
 * <pre>
 * chunk(2, [1, 2, 3, 4, 5, 6, 7]);
 * // returns:
 * // [[1, 2], [3, 4], [5, 6], [7]]
 * </pre>
 *
 * @param {number} size
 * @param {any[]} list
 * @returns {any[]}
 */
const chunk = (size, list) => {
  if (size < 1) {
    throw new Error("Size must be a positive integer");
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
