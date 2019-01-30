/**
 * Created by Aditya
 */

var homePage = {
    ebayHome: by.css('li[class="hl-cat-nav__active"]'),
    ebayIcon: by.id('gh-logo'),
    ebaySearchBar: by.id('gh-ac'),
    ebaySearchButton: by.id('gh-btn'),
    ebaySearchSuggestions: by.id('ui-id-2'),
    ebaySearchFirstSuggestion: by.css('#gAC ul li:nth-child(1) a'),
    ebayShopByCategoryIcon: by.id('gh-shop-a'),
    ebayShopByCategoryMensClothingLink: by.xpath('//a[text()="Men/\'s Clothing"]'),
    ebayShopByCategoryMensClothingTshirts: by.xpath("//img[@alt='T-Shirts']"),
    ebayCartIcon: by.id('gh-cart-i'),
    ebayCartCount: by.id('gh-cart-n'),

};
module.exports = homePage;
