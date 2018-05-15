// home.page.js
var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    usernameLabel: { get: function () { return browser.element('#userNavLabel'); } },
    

    getUserNameLabelText: { value: function() {
        this.usernameLabel.waitForVisible(50000);
        return this.usernameLabel.getText()
    } },

   
});

module.exports = HomePage;