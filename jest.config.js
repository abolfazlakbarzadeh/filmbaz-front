// module.exports = {
//     "preset": 'ts-jest',
//     collectCoverage: true,
//     verbose: true,
//     transform: {
//         "^.+\\.(ts|tsx)?$": ["@swc/jest"],
//         // '^.+\\.(ts|tsx)?$': 'ts-jest',
//         // "^.+\\.(js|jsx)$": "babel-jest",
//         "^.+\\.css$": "jest-transform-css",
//         // "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
//         // '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
//     },
//     collectCoverageFrom: ['<rootDir>/**/*.tsx', '!<rootDir>/**/*.scss'],
//     moduleNameMapper: {
//         // "\\.(css|less|scss|sass)$": "identity-obj-proxy"
//         "\\.(css|scss|svg)$": "jest-transform-stub",
//     },
//     transformIgnorePatterns: [
//         "<rootDir>/node_modules/"
//     ],
//     moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//     moduleDirectories: ["node_modules", "src"],
//     globals: {
//         "ts-jest": {
//             isolatedModules: true,
//         },
//     },
//     testEnvironment: 'jest-environment-jsdom'
// };
// jest.config.js

module.exports = {
    collectCoverage: true,
    transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
    // transformIgnorePatterns: ["/node_modules/"],
    collectCoverageFrom: ['<rootDir>/**/*.tsx', '!<rootDir>/**/*.scss'],
    moduleNameMapper: {
        // "\\.(css|less|scss|sass)$": "identity-obj-proxy"
        "\\.(css|scss|svg)$": "jest-transform-stub",
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    // ...the rest of your config
}

