const allPass = (...funcs) => (...args) => funcs.reduce((accumulator, current) => accumulator && current(...args), true);

module.exports = allPass;
