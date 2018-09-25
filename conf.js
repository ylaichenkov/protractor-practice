require('babel-core/register');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const AllureReporter = require('jasmine-allure-reporter');
  
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
    
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    onPrepare:  () => {
    // Added for non-angular app
    browser.ignoreSynchronization = true;

    // Added the custom locator.
      protractor.by.addLocator('dataId', 
        function (expected, parentElement) {
          let using = parentElement || document;
          let nodes = using.querySelectorAll('[data-tl-id]');
          
          return Array.prototype.filter.call(nodes, (node) => {
            return (node.getAttribute('data-tl-id') === expected);
        });
      }),  

      // Jasmine-spec-reporter
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));

      // HTML Jasmine-allure-reporter
      jasmine.getEnv().addReporter(new AllureReporter({
        allureReporter: {
          resultDir: 'protractor/allure-results'
        }
      }));

      // Take screenshot after each test
      jasmine.getEnv().afterEach( (done) => {
        browser.takeScreenshot().then( (png) => {
          allure.createAttachment('Screenshot', () => {
            return new Buffer(png, 'base64');
          }, 'image/png')();
          done();
        })
      })

      // Set window size
      browser.driver.manage().window().setSize(1280, 1024);
    },

    // Spec patterns are relative to the current working directory
    specs: ['specs/createAccount.Spec.js'],

    baseUrl: 'https://walmart.com',
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 99999999
    },

  };