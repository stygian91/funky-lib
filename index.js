module.exports = {
  add: require('./src/math/add'),
  sub: require('./src/math/subtract'),
  div: require('./src/math/divide'),
  mul: require('./src/math/multiply'),

  allPass: require('./src/logic/allPass'),
  anyPass: require('./src/logic/anyPass'),
  both   : require('./src/logic/both'),
  either : require('./src/logic/either'),
  ifElse : require('./src/logic/ifElse'),
  gt     : require('./src/logic/greaterThan'),
  gte    : require('./src/logic/greaterThanOrEqual'),
  lt     : require('./src/logic/lessThan'),
  lte    : require('./src/logic/lessThanOrEqual'),
  equal  : require('./src/logic/equal'),

  compose: require('./src/function/compose'),
  pipe   : require('./src/function/pipe'),
  curry  : require('./src/function/curry'),
  flip   : require('./src/function/flip'),
  always : require('./src/function/always'),
  __     : require('./src/function/placeholderArgument'),
};
