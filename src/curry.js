const __ = require('./placeholderArgument');

const curry = func => (...args) => (...curriedArgs) => {
  const actualArgs = [];
  let curryIndex = 0;

  for (let index = 0; index < func.length; index++) {
    if (args[index] === __ || index >= args.length) {
      actualArgs.push(curriedArgs[curryIndex]);
      curryIndex++;
    } else {
      actualArgs.push(args[index]);
    }
  }

  return func(...actualArgs);
};

module.exports = curry;
