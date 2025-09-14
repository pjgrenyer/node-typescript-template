import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    silent: false,
    collectCoverageFrom: ['src/**/*.ts'],
    setupFiles: ['./test/setEnvVars.js'],
    setupFilesAfterEnv: [],
    modulePathIgnorePatterns: ['./dist/'],
    coveragePathIgnorePatterns: ['./dist/', './node_modules/'],
    // coverageThreshold: {
    //     global: {
    //         branches: 70,
    //         functions: 70,
    //         lines: 70,
    //         statements: 70,
    //     },
    // },
};

export default config;
