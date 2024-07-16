Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
      Then I will login as 'standard_user'
      Then I will add the backpack to the cart
      Then I will select the cart
      Then I will checkout
      Then I will fill the first name, last name and zip code 'test' 'automation' '123456'
        | firstName | lastName   | postalCode |
        | test      | automation | 123456     |
      Then I will select continue
      Then I will select finish
      Then Validate the complete order text 'Thank you for your order!'

  Scenario: Validate sorting of prices
     Then I will login as 'standard_user'
      Then I will sort the item by high to low 'hilo'
      Then Validate all six items are sorted correctly by price high to low
      Then I will sort the item by low to high 'lohi'
      Then Validate all six items are sorted correctly by price low to high


  Scenario: Validate product removed from cart
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart again
    Then I will select the cart again
    Then I will select remove
    Then Verify the product is removed