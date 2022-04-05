module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage/jest',
  coverageReporters: ['text', 'text-summary', 'json', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  // setupFiles: ['<rootDir>/config/jest/setupEnv.ts'],
  // setupFilesAfterEnv: ['<rootDir>/tests-setup.ts'],
  testRegex: '^.+\\.test\\.(js|ts|jsx|tsx)$',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
