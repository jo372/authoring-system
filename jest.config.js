module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['dotenv/config'],
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    },
}