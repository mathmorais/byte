import { name } from './package.json'

export default {
  displayName: name,
  name,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@domain/(.*)': ['<rootDir>/src/domain/$1'],
    '@infra/(.*)': ['<rootDir>/src/infra/$1'],
    '@app/(.*)': ['<rootDir>/src/app/$1'],
  },
  testEnvironment: 'node',
}
