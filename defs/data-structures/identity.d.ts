/**
 * The identity monad, it's a simple container that just wraps the value.
 */
export default class Identity {
  static of(x: any): Identity;
  constructor(x: any);
  $value: any;
  equals(other: any): boolean;
  map(fn: any): Identity;
  ap(f: any): any;
  chain(fn: any): any;
  join(): any;
  sequence(of: any): any;
  traverse(of: any, fn: any): any;
}
