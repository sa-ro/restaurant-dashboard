module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
    moduleNameMapper: {
        "^@/app/utils/Constants/dummyData.json$": "<rootDir>/__mocks__/dummyDataMock.js",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "^@/(.*)$": "<rootDir>/src/$1",
      },
      transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
      },
  };
  