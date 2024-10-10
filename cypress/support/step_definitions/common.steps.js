import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/HomePage";
import ProfilePage from "../page_objects/ProfilePage ";

Given("I am on the HomePage", () => {
  cy.visit("/");
});

When("I click the {string} link", (linkText) => {
  if (linkText === "Sign in") {
    HomePage.clickSigninLink();
  } else if (linkText === "Profile") {
    HomePage.logProfileLink();
    HomePage.profileLink
      .should("be.visible")
      .and("exist")
      .then((profileLink) => {
        HomePage.clickProfileLink();
      });
  }
});

And("I enter the username {string}", (username) => {
  const envUsername = Cypress.env("username");
  HomePage.typeUsername(envUsername || username);
});

And("I enter the password {string}", (password) => {
  const envPassword = Cypress.env("password");
  HomePage.typePassword(envPassword || password);
});

And("I click on the sign in button", () => {
  HomePage.clickSignin();
  cy.log("Clicked on sign in button");
});

Then("I will be signed in", () => {
  cy.url().then((url) => {
    // this appears to still show the /signin route...
    console.log("Current URL after sign in:", url);
  });
  cy.url().should("eq", Cypress.config("baseUrl"));
});

Given("Given I am on the profile page", () => {
  cy.url().then((url) => {
    expect(url).to.include("/profiles/");
  });
});

When("I open the kebab menu", () => {
  ProfilePage.clickKebabMenu();
});

Then("I click the edit profile link", () => {
  ProfilePage.clickEditProfileLink();
});

Then("I should be on the edit profile page", () => {
  ProfilePage.isOnEditProfilePage();
});

When('I update my bio to {string}', (newBio) => {
  ProfilePage.updateBio(newBio);
});

When('I upload a new profile image {string}', (imagePath) => {
  ProfilePage.uploadProfileImage(imagePath);
});

When('I click the save button', () => {
  ProfilePage.clickSaveButton();
});

When('I click the cancel button', () => {
  ProfilePage.clickCancelButton();
});

Then('I should see the edit profile form', () => {
  ProfilePage.editProfileForm.should('be.visible');
});

Then('I should see my updated bio {string}', (updatedBio) => {
  ProfilePage.bioTextarea.should('have.value', updatedBio);
});

Then('I should see my new profile image', () => {
  // This step might need to be adjusted based on how the image is displayed
  cy.get('img').should('have.attr', 'src').and('not.be.empty');
});

Then('I should not see my updated bio {string}', (unchangedBio) => {
  ProfilePage.bioTextarea.should('not.have.value', unchangedBio);
});