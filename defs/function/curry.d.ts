export default curry;
/**
 * Curries the provided function.
 * A curried function does not need to have all of its arguments provided at once.
 * If `f` is a ternary and `g = curry(f)`, then the following is equivalent:
 *
 * <pre>
 * g(1)(2)(3);
 * g(1)(2, 3);
 * g(1, 2)(3);
 * g(1, 2, 3);
 * </pre>
 *
 * Additionaly, the F.__ symbol can be used as a placeholder argument,
 * when you want to partially apply arguments with gaps inbetween them.
 *
 * <pre>
 * g(1, __, 3)(2);
 * g(__, __, 3)(1, 2);
 * g(__, __, 3)(__, 2)(1);
 * </pre>
 *
 * @param {function} func
 * @returns {function}
 */
declare function curry(func: Function): Function;
