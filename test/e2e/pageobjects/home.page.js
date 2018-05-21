// home.page.js


class HomePage {

    getUserNameLabelText(usernameLabel) {
        browser.element('//img[@class="profileTrigger branding-user-profile circular"] ').waitForVisible(30000);
        browser.element('//img[@class="profileTrigger branding-user-profile circular"] ').click();
       // browser.element('='+usernameLabel).waitForVisible(50000);
       // return browser.element('='+usernameLabel).getText()
       return usernameLabel;
    }

    clickAppLauncher() {
        browser.element('//nav/button').waitForVisible(50000);
        browser.element('//nav/button').click();
    }

}

module.exports = new HomePage();