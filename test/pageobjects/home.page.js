// home.page.js
var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    usernameLabel: { get: function () { return browser.element('#userNavLabel'); } },
    
    

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'home/home.jsp');
    } },

   
});

module.exports = HomePage;