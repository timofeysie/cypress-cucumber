Feature: Navigation

  Scenario: Navigating to sign in page
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "Centrist1"
    And I enter the password "iamthelizardking"
    And I click on the sign in button
    Then I will be signed in
