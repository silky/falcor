var testRunner = require('./testRunner');
var testReporter = require('./reporters/nodeTestReporter');
var testConfig = require('./testConfig')();
var testSuiteGenerator = require('./testSuiteGenerator');

var models = testConfig.models;
var formats = testConfig.formats;
var tests = testConfig.get;
var suite = testConfig.suite;

suite.tests = testSuiteGenerator({

    iterations: 1,

    models: {
        'model' : models.model,
        'mock' : models.mock
    },

    formats: formats,

    tests: {
        'scrollGallery': tests.scrollGallery
    }

});

testRunner(suite, 2, testReporter);
