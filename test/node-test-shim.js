/**
 * Jest does not resolve Node's `node:test` built-in the same way as Node;
 * `yeoman-test` ≥11 imports `mock` from `node:test`. This shim exposes
 * a minimal `mock.fn` compatible with how `yeoman-test` uses it.
 */
import { jest as jestGlobals } from '@jest/globals';

export const mock = {
  fn(implementation) {
    if (implementation === undefined) {
      return jestGlobals.fn();
    }
    if (
      typeof implementation === 'function' &&
      implementation.prototype &&
      implementation.prototype.constructor === implementation
    ) {
      return jestGlobals.fn(function mockedConstructor(...args) {
        return Reflect.construct(implementation, args, new.target);
      });
    }
    return jestGlobals.fn(implementation);
  },
};
