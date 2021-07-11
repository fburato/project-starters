const path = require("path");
module.exports = {
  roots: [path.resolve(__dirname, "test")],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/fileTransformer.js",
  }
};
