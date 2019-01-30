var myStepDefinitionsWrapper = function () {

    var searchResultsPage = require('../../../pages/searchResultsPage');
    var homePage = require('../../../pages/homePage');
    var itemPage = require('../../../pages/itemPage');
    var cartPage = require('../../../pages/cartPage');
    var settings = require('../../../common/settings');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var expectedResultDictionary = {};

    this.Given(/^I am in Ebay home page$/, function (callback) {
        browser.waitForAngularEnabled(false);
        browser.findElement(homePage.ebayHome).isDisplayed().then(function () {
            callback();
        });
    });


    this.When(/^I search for an item "([^"]*)" in search$/, function (searchItem, callback) {
        browser.findElement(homePage.ebaySearchBar).isDisplayed().then(function () {
            browser.findElement(homePage.ebaySearchBar).click().then(function () {
                browser.findElement(homePage.ebaySearchBar).sendKeys(searchItem).then(function () {
                    browser.waitForElement(homePage.ebaySearchSuggestions).then(function () {
                        browser.findElement(homePage.ebaySearchSuggestions).isDisplayed().then(function () {
                            assert.include(searchItem, homePage.ebaySearchFirstSuggestion, "Search Suggestions are not the same")
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I search for an item with Shop by Category "([^"]*)"$/, function (shopByCategory, callback) {
        browser.findElement(homePage.ebayShopByCategoryIcon).isDisplayed().then(function () {
            browser.findElement(homePage.ebayShopByCategoryIcon).click().then(function () {
                browser.findElement(homePage.ebayShopByCategoryMensClothingLink).isDisplayed().then(function () {
                    browser.findElement(homePage.ebayShopByCategoryMensClothingLink).click().then(function () {
                        browser.findElement(homePage.ebayShopByCategoryMensClothingTshirts).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I get the searched item in Suggestions list and click on it$/, function (callback) {
        browser.findElement(homePage.ebaySearchFirstSuggestion).isDisplayed().then(function () {
            browser.findElement(homePage.ebaySearchFirstSuggestion).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^I click on first item in shop by category page$/, function (callback) {
        browser.waitForElement(searchResultsPage.listShopByCategoryFirstItem).then(function () {
            browser.findElement(searchResultsPage.listShopByCategoryFirstItem).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.listShopByCategoryFirstItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on second item in shop by category page$/, function (callback) {
        browser.waitForElement(searchResultsPage.listShopByCategorySecondItem).then(function () {
            browser.findElement(searchResultsPage.listShopByCategorySecondItem).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.listShopByCategorySecondItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on first item in search results page$/, function (callback) {
        browser.waitForElement(searchResultsPage.resultsList).then(function () {
            browser.findElement(searchResultsPage.resultsList).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.resultsListFirstItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on second item in search results page$/, function (callback) {
        browser.waitForElement(searchResultsPage.resultsList).then(function () {
            browser.findElement(searchResultsPage.resultsList).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.resultsListSecondItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on Add to cart$/, function (callback) {
        browser.waitForElement(itemPage.addToCart).then(function () {
            browser.findElement(itemPage.addToCart).isDisplayed().then(function () {
                browser.findElement(itemPage.addToCart).click().then(function () {
                    browser.findElement(itemPage.noThanksButton).isDisplayed().then(function () {
                        browser.findElement(itemPage.noThanksButton).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I click on cart icon$/, function (callback) {
        browser.waitForElement(itemPage.addToCart).then(function () {
            browser.findElement(itemPage.addToCart).isDisplayed().then(function () {
                browser.findElement(itemPage.addToCart).click().then(function () {
                    browser.findElement(itemPage.noThanksButton).isDisplayed().then(function () {
                        browser.findElement(itemPage.noThanksButton).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I navigate back to search results$/, function (callback) {
        browser.findElement(itemPage.backToSearchResults).isDisplayed().then(function () {
            browser.findElement(itemPage.backToSearchResults).click().then(function () {
                browser.findElement(searchResultsPage.noThanksButton).isDisplayed().then(function () {
                    browser.findElement(itemPage.noThanksButton).click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^I navigate back to home page$/, function (callback) {
        browser.findElement(homePage.ebayIcon).isDisplayed().then(function () {
            browser.findElement(homePage.ebayIcon).click().then(function () {
                browser.waitForElement(homePage.ebayHome).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^I verify "([^"]*)" items are added to the kart by asserting the cart count$/, function (expectedCartCount, callback) {
        browser.findElement(homePage.ebayCartCount).isDisplayed().then(function () {
            browser.findElement(itemPage.ebayCartCount).getText().then(function (cartCount) {
                assert.equal(expectedCartCount, cartCount, "Cart Count is not as expected");
                callback();
            });
        });
    });

    this.Then(/^I verify the "([^"]*)" added items in the cart in cart page$/, function (expectedCartCount, callback) {
        browser.findElement(cartPage.cart).isDisplayed().then(function () {
            browser.findElement(cartPage.cartItemsCount).getSize().then(function (cartCount) {
                assert.equal(expectedCartCount, cartCount, "Cart Count in Cart page is not as expected");
                callback();
            });
        });
    });


};
module.exports = myStepDefinitionsWrapper;