import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/HomePage";
import "./common.steps"; // Import common steps

Then("I should be on the Sign in page", () => {
  cy.url().should("include", "/signin");
});

Then("I will be on the profile page", () => {
  cy.url().then((url) => {
    expect(url).to.include("/profiles/");
  });
});

Then("Error message should be displayed", () => {
  HomePage.errorMessageLogin().should("have.text", "Incorrect username or password.");
});
