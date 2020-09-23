export default Maybe;
/**
 * The Maybe monad - goes through with operations on the value;
 * does nothing when the value is nil.
 */
declare class Maybe {
  static of(x: any): Maybe;
  constructor(x: any);
  value: any;
  get isNothing(): boolean;
  get isJust(): boolean;
  map(fn: any): Maybe;
  ap(f: any): any;
  equals(other: any): any;
  chain(fn: any): any;
  join(): any;
  getValue(): any;
  sequence(of: any): any;
  traverse(of: any, fn: any): any;
}
