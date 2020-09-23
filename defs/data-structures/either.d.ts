/**
 * Left value of the Either monad.
 * Has noop implementations.
 */
export class Left extends Either {
  constructor(x: any);
  get isLeft(): boolean;
  get isRight(): boolean;
  equals(other: any): boolean;
  map(): Left;
  ap(): Left;
  chain(): Left;
  join(): Left;
  sequence(of: any): any;
  traverse(of: any, fn: any): any;
}
/**
 * Right value of the Either monad.
 */
export class Right extends Either {
  constructor(x: any);
  get isLeft(): boolean;
  get isRight(): boolean;
  equals(other: any): boolean;
  map(fn: any): Right;
  ap(f: any): any;
  chain(fn: any): any;
  join(): any;
  sequence(of: any): any;
  traverse(of: any, fn: any): any;
}
/**
 * Either monad, parent of `Left` and `Right`.
 * Used for `Right` instance creation.
 */
export class Either {
  static of(x: any): Right;
  constructor(x: any);
  value: any;
}
