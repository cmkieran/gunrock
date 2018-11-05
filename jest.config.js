/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 4018 Eric Smyth <https://smyth.app>
 */

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.{test,runner}.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 97,
      branches: 97,
      functions: 90,
      lines: 97,
    },
  },
  globals: {
    __PATH_PREFIX__: ''
  },
  moduleNameMapper: {
    '.*\\.md$': '<rootDir>/testing/__mocks__/md.js',
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/testing/__mocks__/cssModule.js',
    // eslint-disable-next-line max-len
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/testing/__mocks__/image.js',
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/testing/transform.js'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  setupFiles: [
    '<rootDir>/testing/setupJest.js'
  ],
  testRegex: '__tests__/.*\\.test\\.jsx?$',
};
