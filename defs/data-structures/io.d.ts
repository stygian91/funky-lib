/**
 * The IO monad - defers execution.
 */
export default class IO {
  static of(x: any): IO;
  constructor(fn: any);
  fn: any;
  run(): any;
  map(fn: any): IO;
}
