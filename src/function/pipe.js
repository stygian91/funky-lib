const pipe = (...funcs) => (...args) => {
  if (funcs.length === 0) {
    throw new Error("No functions provided.");
  }

  const result = funcs.reduce(
    (prevResult, currentFn) => [currentFn(...prevResult)],
    args
  );

  return result[0];
};

export default pipe;
