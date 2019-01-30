/**
 * This file is for setting configuration required in test cases
 */

var settings = function () {
    this.constants = {
        'CHAI': 'chai',
        'FIRSTSEARCHITEM': 'Smart TV',
        'SECONDSEARCHITEM': 'Washing Machine',
        'CARTCOUNT': '2',
        'SHOPBYCATEGORY': 'Men/\'s Clothing',
    };
    this.config = {
        'WAITTIME': '5000',
        'STEPTIMEOUT': '60000'
    }
}
module.exports = new settings();

