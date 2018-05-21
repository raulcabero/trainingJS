// products.page.js

class ProductsPage {

    getProductsMenuItemText(){
        browser.element('//span[text()="Products"]/ancestor::a[@title="Products"]').waitForVisible(30000);
        return browser.element('//span[text()="Products"]/ancestor::a[@title="Products"]').getText();
    }

    clickNewButton() {
        browser.element('//div[@title="New"]/ancestor::a').waitForVisible(30000);
        browser.element('//div[@title="New"]/ancestor::a').click();
    }

    getNewProductLabelText() {
        browser.element('//h2[text()="New Product"]').waitForVisible(30000);
        return browser.element('//h2[text()="New Product"]').getText();
    }

    setProductNameField(productName) {
        browser.element('//span[text()="Product Name"]/ancestor::label/following::input').waitForVisible(30000);
        browser.element('//span[text()="Product Name"]/ancestor::label/following::input').setValue(productName);
    }

    clickSaveButton() {
        browser.element('//button[@title="Save"]').waitForVisible(30000);
        browser.element('//button[@title="Save"]').click();
    }

    getProductLabelText(productName) {
        browser.element('//span[text()="Product Name"]/ancestor::div/following::span[text()="' + productName + '"]/ancestor::h1/child::span').waitForVisible(30000);
        return browser.element('//span[text()="Product Name"]/ancestor::div/following::span[text()="' + productName + '"]/ancestor::h1/child::span').getText();
    }

}

module.exports = new ProductsPage();


