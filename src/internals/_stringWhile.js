import curry3 from "../function/curry3";

const _stringWhile = (condFn, func, string) => {
  for (let key = 0; key < string.length; key++) {
    const element = string[key];

    if (!condFn(element, key, string)) {
      return;
    }

    func(element, key, string);
  }
};

export default curry3(_stringWhile);
