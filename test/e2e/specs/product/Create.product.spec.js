const testData = require('../../configurations/user.json');
const ProductsPage = require('../../pageobjects/products.page');
const NavigationPage = require('../../utils/navigation.page');


describe('create prodcut', function () {
    beforeEach(function () {
        NavigationPage.logIn(testData.userValid, testData.passwordValid);
        NavigationPage.goProductsPage();
    });

    it('Create new product', function () {
        ProductsPage.clickNewButton();  
        expect(ProductsPage.getNewProductLabelText()).to.contain('New Product');
        ProductsPage.setProductNameField("test");
        ProductsPage.clickSaveButton();
        expect(ProductsPage.getProductLabelText("test")).to.contain('test');
        //browser.pause(500000);

    });

   
});