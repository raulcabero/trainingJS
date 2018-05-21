// login.spec.js
const LoginPage = require('../../pageobjects/login.page');
const HomePage = require('../../pageobjects/home.page');
const testData = require('../../configurations/user.json');

describe('login form', function () {
    beforeEach(function () {
        LoginPage.redirectToLogin();
    });

    it('should deny access with wrong creds', function () {
        LoginPage.setUserNameTextField(testData.userWrong);
        LoginPage.setPasswordTextField(testData.passwordWrong);
        LoginPage.clickLoginButton();
        expect(LoginPage.getErrorText()).to.contain('Please check your username and password');
    });

    it('should allow access with correct creds', function () {
        LoginPage.setUserNameTextField(testData.userValid);
        LoginPage.setPasswordTextField(testData.passwordValid);
        LoginPage.clickLoginButton();
        expect(HomePage.getUserNameLabelText()).to.contain(testData.userName);
    });
});