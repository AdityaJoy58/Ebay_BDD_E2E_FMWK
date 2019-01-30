/**
 * Created by Aditya
 */

var cartPage = {

    cart: by.css("div[class='app-cart']"),
    cartItemsCount: by.css("div[class='cart-bucket']"),
    removeItem: by.css("button[data-test-id='cart-remove-item']")

};
module.exports = cartPage;
