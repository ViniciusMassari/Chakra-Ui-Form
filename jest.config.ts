const config = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
