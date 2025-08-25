import type { Config } from 'jest'

const config: Config = {
  // Use SWC to transform TS/TSX for faster Jest runs
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^next/font/(.*)$': '<rootDir>/__mocks__/nextFontMock.ts',
    '^lucide-react$': '<rootDir>/__mocks__/lucide-react.tsx',
    '^next/image$': '<rootDir>/__mocks__/nextImageMock.tsx'
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default config
