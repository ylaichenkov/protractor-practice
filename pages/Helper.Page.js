class HelperPage {
    constructor() {
        this.EC = protractor.ExpectedConditions;
        this.DEFAULT_TIMEOUT = 15000;
    }

    goTo(url) {
        browser.get(url);
    }
    getUrl() {
        return browser.getCurrentUrl().then(url => `${url}`);
    }
    getTitleOfElement(elem) {
        return elem.getAttribute('title');
    }
    waitUntilUrlChangedTo(url) {
        return browser.wait(this.EC.urlContains(url), this.DEFAULT_TIMEOUT);
    }
    getEmail() {
        return `${+ new Date()}@mailinator.com`
    }
}

export default HelperPage;