const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const AllAppsPage = require('../pageobjects/all.apps.page');
const ProductsPage = require('../pageobjects/products.page');

class NavigationPage {

    logIn(username, password) {
        LoginPage.login(username, password); 
        expect(HomePage.getUserNameLabelText(username)).to.contain(username);
    }

    goProductsPage() {
        HomePage.clickAppLauncher();
        AllAppsPage.findAppInputText("Products");
        AllAppsPage.clickfoundItemLink("Products");
        expect(ProductsPage.getProductsMenuItemText()).to.contain("Products");
    }

}

module.exports = new NavigationPage();