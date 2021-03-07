import { name } from '../server/package.json'

export default {
  displayName: name,
  name,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@components/(.*)': ['<rootDir>/src/components/$1'],
    '@styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@store/(.*)': ['<rootDir>/src/store/$1'],
    '@assets/(.*)': ['<rootDir>/src/assets/$1'],
  },
  testEnvironment: 'node',
}
