Feature: Profile

  Scenario: I go to the profile page and edit profile
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the sign in button
    Then I will be signed in
    When I click the "Profile" link
    Given I will be on the profile page
    When I open the kebab menu
    Then I click the edit profile link
    When I update my bio to "This is my new bio"
    And I click the save button
    Then I should see my updated bio "This is my new bio"
    When I upload a new profile image "path/to/new/image.jpg"
    And I click the save button
    Then I should see my new profile image
    When I update my bio to "This change should not be saved"
    And I click the cancel button
    Then I should not see my updated bio "This change should not be saved"