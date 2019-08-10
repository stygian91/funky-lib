const dir = './src/';
const map = {
  add: 'add',
  sub: 'subtract',
  allPass: 'allPass',
  anyPass: 'anyPass',
  both: 'both',
  either: 'either',
  pipe: 'pipe',
  curry: 'curry',
  __: 'placeholderArgument',
};

const mapExports = (map) => {
  const exports = {};

  for (const name in map) {
    exports[name] = require(`${dir}${map[name]}`);
  }

  return exports;
};

module.exports = mapExports(map);
