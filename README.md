### Setting up protractor
---
#### Prerequisites
Node.js
Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed.
Check the version of node you have by running:
node --version.
It should be greater than v0.10.0.

Node.js comes with the Protractor npm package, which you can use to install Protractor

#### Setup

Use npm to install Protractor globally (omit the -g if you’d prefer not to install globally):

npm install -g protractor

This will install two command line tools, protractor and webdriver-manager.

Check that Protractor is working by running:
protractor --version

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.
Use it to download the necessary binaries with:
webdriver-manager update

Now start up a server with:
webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser.
You can see information about the status of the server at 
http://localhost:4444/wd/hub
.

### Running the tests
---

Now run the test with:
protractor conf.js

You should see a Chrome browser window open up and navigate to the page.

### Generate pretty view HTML report
---

Run the command:
npm posttest

Then open the index.html file in the 'allure-report' directory.