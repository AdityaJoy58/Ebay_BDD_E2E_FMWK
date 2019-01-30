exports.config = {
    //defaultTimeoutInterval: 25000,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'tests/e2e/featureFiles/**/*.feature'
    ],

    baseURL: 'https://www.ebay.com.au',

    cucumberOpts: {
        format: ['json:./reports/cucumber-test-results.json', 'pretty'],
        require: ['./tests/e2e/featureFiles/**/*_steps.js','./tests/e2e/support/*.js'],
        tags: [],
        ignoreUncaughtExceptions: true,
        profile: false,
        'no-source': true
    }
};