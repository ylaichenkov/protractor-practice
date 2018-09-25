import HelperPage from "./Helper.Page";

class BasePage extends HelperPage {
  constructor() {
    super();
    this.accountButton = element(by.dataId('BubbleButtonheader-GlobalHeaderBubblesNav-Account'));
    this.accountHeader = element(by.dataId('GlobalAccountMenu-header'));
    this.createAccountLink = element(by.dataId('GlobalAccountMenu-link-3'));
    this.firstNameField = element(by.dataId('signup-first-name-input'));
    this.lastNameField = element(by.dataId('signup-last-name-input'));
    this.emailField = element(by.dataId('signup-email-input'));
    this.passwordField = element.all(by.dataId('signup-password-input')).first();
    this.createAccountButton = element(by.dataId('signup-submit-btn'));
  }
  createAccount(firstName, lastName, email, password) {
    this.firstNameField.sendKeys(firstName);
    this.lastNameField.sendKeys(lastName);
    this.emailField.sendKeys(email);
    this.passwordField.sendKeys(password);
    this.createAccountButton.click();
}

}

export default BasePage;