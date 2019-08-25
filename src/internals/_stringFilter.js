import _stringWhile from "./_stringWhile";
import curry from "../function/curry";
import always from "../function/always";

const _stringFilter = (filterFn, string) => {
  const result = [];

  const iterationFn = (char, key, str) => {
    if (!filterFn(char, key, str)) {
      return;
    }

    result.push(char);
  };

  _stringWhile(always(true), iterationFn, string);

  return result.join('');
}

export default curry(_stringFilter);
