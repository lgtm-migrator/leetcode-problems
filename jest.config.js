/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['./src'],
  testEnvironment: 'node',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  collectCoverage: true
}
