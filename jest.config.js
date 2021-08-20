/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts"
    },
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!**/__tests__/**",
    "!**/node_modules/**",
  ]
};
