// login.page.js
var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    logIn:     { get: function () { return browser.element('#Login'); } },
    error:    { get: function () { return browser.element('#error'); } },
    

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
    } },

    submit: { value: function() {
        this.logIn.click();
    } },

    getError: { value: function() {
        this.error.waitForVisible(50000);
        return this.error.getText();
    } }

});

module.exports = LoginPage;