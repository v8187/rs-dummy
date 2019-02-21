module.exports = {
    'collectCoverageFrom': [
        'src/**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**'
    ],
    'testMatch': [
        '<rootDir>/tests/**/?(*.)test.ts',
        '<rootDir>/tests/**/date*.ts'
    ],
    'testEnvironment': 'node',
    'testURL': 'http://localhost',
    'transform': {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    'transformIgnorePatterns': [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
    ],
    'moduleFileExtensions': [
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'web.js',
        'js',
        'web.jsx',
        'jsx',
        'json',
        'node',
        'mjs'
    ],
    'globals': {
        'ts-jest': {
            'tsConfig': 'tsconfig.test.json'
        }
    }
};