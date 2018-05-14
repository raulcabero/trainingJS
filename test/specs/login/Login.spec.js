// login.spec.js
var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');
var HomePage = require('../../pageobjects/home.page');

describe('login form', function () {
    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        LoginPage.error.waitForVisible(10000); 

        expect(LoginPage.error.getText()).to.contain('Please check your username and password');
    });

    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('nelson@jalasoft.com');
        LoginPage.password.setValue('Macross2.');
        LoginPage.submit();
        HomePage.usernameLabel.waitForVisible(10000);        
        expect(HomePage.usernameLabel.getText()).to.contain('nelson cabero');
    });
});