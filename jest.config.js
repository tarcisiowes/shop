const jestPreset = require("jest-expo/jest-preset");

module.exports = {
  ...jestPreset,
  setupFiles: ["<rootDir>/jest.setup.pre.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    ...(jestPreset.moduleNameMapper || {}),
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
