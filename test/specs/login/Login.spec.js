// login.spec.js
var LoginPage = require('../../pageobjects/login.page');
var HomePage = require('../../pageobjects/home.page');
var testData = require('../../configurations/user.json');

describe('login form', function () {
    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue(testData.userWrong);
        LoginPage.password.setValue(testData.passwordWrong);
        LoginPage.submit();
        expect(LoginPage.getError()).to.contain('Please check your username and password');
    });

    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue(testData.userValid);
        LoginPage.password.setValue(testData.passwordValid);
        LoginPage.submit();
        expect(HomePage.getUserNameLabelText()).to.contain(testData.userName);
    });
});