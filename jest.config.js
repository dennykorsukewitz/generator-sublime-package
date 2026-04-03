export default {
  testTimeout: 20000,
  transform: {},
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['<rootDir>/test/node-test-shim.js'],
  moduleNameMapper: {
    // Jest resolves `node:test` as the package name `test`; map to a shim
    '^node:test$': '<rootDir>/test/node-test-shim.js',
    '^test$': '<rootDir>/test/node-test-shim.js',
  },
};
