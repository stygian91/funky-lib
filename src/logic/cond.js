import curry2 from "../function/curry2";

/**
 * Works a bit like the `switch` structure.
 * Contains pairs condition and transform functions.
 * The first condition function that returns a truthy value will cause its paired transform function to be called.
 * Both the condition and transform functions are passed the `arg` param.
 * The `pairs` argument's format should look like this:
 * <pre>
 * [
 *   [x => x > 5, x => x + 5],
 *   [x => x < 5, x => x - 5],
 *   [() => true, x => x],
 * ]
 * </pre>
 * If you have the last pair's condition function always return true,
 * it will work like the `default` case in a `switch` statement.
 * If you don't have a default case and none of the condition functions pass,
 * then the funciton will return `undefined`.
 *
 * @param {any[]} pairs
 * @param {any} arg
 * @returns {any}
 */
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

export default curry2(cond);
