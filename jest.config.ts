export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.ts'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
};
