
var libraries = function () {
    this.randomString = function (length) {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
    }

    this.waitForElement = function (selector, waitFor) {
        waitFor = waitFor || 5000;
        browser.driver.manage().timeouts().implicitlyWait(waitFor);
        browser.driver.findElement(selector);
        browser.driver.manage().timeouts().implicitlyWait(0);
    }
}
module.exports = new libraries();