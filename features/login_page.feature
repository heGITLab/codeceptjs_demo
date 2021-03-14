Feature: Perform login function
  In order to perform login function
  User wants to navigate login page

  Scenario: Verify successfull login
    Given User navigate to login page
    When User enter username 'standard_user' and password 'secret_sauce'
    When User click on the login button
    Then User verify the inventory url '/inventory'

  @smoke
  Scenario: Verify unsuccessfull login
    Given User should navigate to login page
    When User should enter username 'standard_user' and password '1234566'
    When User should click on the login button
    Then System should display an error message as 'Epic sadface: Username and password do not match any user in this service'