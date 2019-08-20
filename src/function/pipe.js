const pipe = (...funcs) => (...args) => {
  if (funcs.length === 0) {
    throw new Error('No functions provided.');
  }

  let res = funcs[0](...args);
  for (let index = 1; index < funcs.length; index++) {
    const func = funcs[index];
    res = func(res);
  }

  return res;
}

export default pipe;
