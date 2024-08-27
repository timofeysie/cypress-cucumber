import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/HomePage";

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
