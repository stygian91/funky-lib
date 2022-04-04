module.exports = {
  // collectCoverage: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**"],
  coverageReporters: ["lcov", "text"],
  testPathIgnorePatterns: ["<rootDir>/es/", "<rootDir>/dist/"],
};
