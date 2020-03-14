module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**"],
  coverageReporters: ["json-summary", "text"]
};
