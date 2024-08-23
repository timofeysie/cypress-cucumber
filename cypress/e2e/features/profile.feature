Feature: Profile

  Scenario: I go to the profile page
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the sign in button
    Then I will be signed in
    When I click the "Profile" link
    Then I will be on the profile page
