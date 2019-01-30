var cartPage = require('../pages/cartPage');

var hooks = function () {
    this.registerHandler('BeforeFeature', function(feature){
        browser.ignoreSynchronization = true;
        browser.get("https://www.ebay.com.au");
    });

    this.registerHandler('AfterScenario', function(scenario){
        //remove items from cart to make it empty
        element.all(browser.findElement(cartPage.removeItem).filter(function (elem) {}
        )).click().then(function () {
            return 0;
        });
    });

    this.registerHandler('AfterFeature', function(feature){
        //perform logout
        return browser.get("https://www.ebay.com.au");
    });

};

module.exports = hooks;
