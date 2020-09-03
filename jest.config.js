module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**"],
  coverageReporters: ["lcov", "text"],
  testPathIgnorePatterns: ["<rootDir>/es/", "<rootDir>/dist/"],
};
