import curry2 from "../function/curry2";
import always from "../function/always";
import _stringWhile from "./_stringWhile";

const _stringMap = (func, string) => {
  const result = [];

  const iterationFn = (char, key, str) => {
    result.push(func(char, key, str));
  };

  _stringWhile(always(true), iterationFn, string);

  return result.join("");
};

export default curry2(_stringMap);
