Feature: I want to be able to add 2 items to the cart/trolley and go to checkout
  As a user on navigates to Ebay
  I should add 2 items
  I should be able checkout

  Scenario: Verify I am able to search an item by suggestions and add 2 items to cart by navigating to and back to search results
    Given I am in Ebay home page
    When I search for an item "Smart TV" in search
    And I get the searched item in Suggestions list and click on it
    And I click on first item in search results page
    And I click on Add to cart
    And I navigate back to search results
    And I click on second item in search results page
    And I click on Add to cart
    Then I verify "2" items are added to the kart by asserting the cart count

  Scenario: Verify I am able to search an item from seperate categories and add 2 items to cart
    Given I am in Ebay home page
    When I search for an item "Smart TV" in search
    And I get the searched item in Suggestions list and click on it
    And I click on first item in search results page
    And I click on Add to cart
    And I navigate back to home page
    And I search for an item "Washing Machine" in search
    And I get the searched item in Suggestions list and click on it
    And I click on first item in search results page
    And I click on Add to cart
    Then I verify "2" items are added to the kart by asserting the cart count

  Scenario: Verify I am able to search an item from shop by categories and 2nd item with search and verify the cart
    Given I am in Ebay home page
    When I search for an item with Shop by Category "Men's Clothing"
    And I click on first item in shop by category page
    And I click on Add to cart
    And I navigate back to home page
    When I search for an item "Smart TV" in search
    And I get the searched item in Suggestions list and click on it
    And I click on first item in search results page
    And I click on Add to cart
    And I click on cart icon
    Then I verify the "2" added items in the cart in cart page