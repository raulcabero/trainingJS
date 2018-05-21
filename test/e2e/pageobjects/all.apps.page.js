class AllAppsPage {

    clickSalesLink(){
        browser.element('.appTileTitle=Sales').waitForVisible(50000);
        browser.element('.appTileTitle=Sales').click();
    }

    findAppInputText(item){
        browser.element('//input[@class="slds-input input"]').waitForVisible(30000);
        browser.element('//input[@class="slds-input input"]').setValue(item);
    }

    clickfoundItemLink(item){
        browser.element('='+item).waitForVisible(50000);
        browser.element('='+item).click();
    }

    

}

module.exports = new AllAppsPage();