module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/mocks/**',
    '!**/my-icons/**',
    '!**/index.{ts,tsx}',
    '!**/**.error.{ts,tsx}',
    '!**/**.factory.{ts,tsx}',
    '!**/**.styles.ts',
    '!**/hooks/**',
    '!**/**.constants.{ts,tsx}',
    '!**/**.helper.{ts,tsx}',
    '!**/**.model.ts',
    '!**/**.contract.ts',
    '!**/**.dto.ts',
    '!<rootDir>/src/core/application/common/styles/global.ts',
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',
    '!**/**.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/core/main/config/jest/jest-setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.styles.ts$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}