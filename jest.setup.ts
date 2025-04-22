// filepath: /Users/paul/Documents/GitHub/michelleocampo.com/jest.setup.ts
import '@testing-library/jest-dom';

// filepath: /Users/paul/Documents/GitHub/michelleocampo.com/jest.config.ts
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
console.log('jest.setup.ts loaded');
import '@testing-library/jest-dom';