import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import NavPage from "../page_objects/HomePage";

Given("I am on the HomePage", () => {
  cy.visit("/");
});

When("I click the {string} link", (linkText) => {
  if (linkText === "Sign in") {
    navPage.clickSigninLink();
  } else if (linkText === "Profile") {
    // Ensure the user is logged in before clicking the profile link
    cy.getCookie('auth_token').should('exist');
    cy.url().should('eq', Cypress.config('baseUrl'));
    navPage.profileLink.should('be.visible');
    navPage.clickProfileLink();
  }
});

Then("I should be on the Sign in page", () => {
  cy.url().should("include", "/signin");
});

And("I enter the username {string}", (username) => {
  navPage.typeUsername(username);
});

And("I enter the password {string}", (password) => {
  navPage.typePassword(password);
});

And("I click on the sign in button", () => {
  navPage.clickSignin();
});

Then("I will be signed in", () => {
  cy.url().should('eq', Cypress.config('baseUrl'));
});

Then("I will be on the profile page", () => {
  cy.url().then((url) => {
    console.log('Current URL:', url);
    expect(url).to.include("/profiles/");
  });
});