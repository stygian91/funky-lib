import curry from "../function/curry";

const _stringMap = (func, object) => {
  const result = [];

  for (const key in object) {
    const element = object[key];
    result.push(func(element, key, object));
  }

  return result.join('');
};

export default curry(_stringMap);
