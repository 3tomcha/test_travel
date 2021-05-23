module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
}