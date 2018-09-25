import BasePage from '../pages/Base.Page';
import data from '../data/data';

describe('Verify creation new account functionality', () => {
    const page = new BasePage();
    const url = browser.baseUrl;

    beforeAll(  () => {
        page.goTo(url);
    });

    it('Should click on the "Account" button and Verify panel header', () => {
         page.accountButton.click();
         expect(page.accountHeader.getText()).toBe(data.accountHeader);
    });
    it('Should click on the "Create account" link and Verify rediraction to the "Signup" page ',  () => {
        page.createAccountLink.click();
        expect(page.getUrl()).toBe(data.signupUrl);
    });
    it('Should enter a valid data, create account and Verify that user has been created',  () => {
        page.createAccount(data.firstName, data.lastName, page.getEmail(), data.password);
        page.waitUntilUrlChangedTo(data.accountUrl);
        expect(page.getUrl()).toContain(data.accountUrl);
        expect(page.getTitleOfElement(page.accountButton))
            .toBe(`${data.firstName} ${data.lastName[0]}. Your Account`);
    });
});