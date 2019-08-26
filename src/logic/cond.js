import curry from '../function/curry';

const cond = (pairs, arg) => {
  for (let index = 0; index < pairs.length; index++) {
    const pair = pairs[index];
    const condFn = pair[0];
    const transformFn = pair[1];

    if (condFn(arg)) {
      return transformFn(arg);
    }
  }
};

export default curry(cond);
