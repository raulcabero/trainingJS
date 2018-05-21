// login.page.js
class LoginPage {

    /**
     * define elements
     */
    // constructor() {
    //     this.usernameTextField = browser.element('#username');
    //     this.passwordTextField = browser.element('#password');
    //     this.logInButton = browser.element('#Login');
    //     this.errorText = browser.element('#error');
    // }

    setUserNameTextField(username) {
        browser.element('#username').waitForVisible(30000);
        browser.element('#username').setValue(username);
    }

    setPasswordTextField(password) {
        browser.element('#password').waitForVisible(30000);
        browser.element('#password').setValue(password);
    }

    clickLoginButton() {
        browser.element('#Login').waitForVisible(30000);
        browser.element('#Login').click();
    }

    getErrorText() {
        browser.element('#error').waitForVisible(30000);
        return browser.element('#error').getText();
    }

    redirectToLogin() {
        browser.url('https://login.salesforce.com/');
    }

    login(username, password) {
        this.redirectToLogin();
        this.setUserNameTextField(username);
        this.setPasswordTextField(password);
        this.clickLoginButton();

    }
}

module.exports = new LoginPage();