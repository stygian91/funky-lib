import curry from "../function/curry";
import always from "../function/always";
import _stringWhile from "./_stringWhile";

const _stringMap = (func, string) => {
  const result = [];

  const iterationFn = (char, key, string) => {
    result.push(func(char, key, string));
  };

  _stringWhile(always(true), iterationFn, string);

  return result.join("");
};

export default curry(_stringMap);
