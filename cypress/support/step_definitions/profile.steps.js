import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/HomePage";
import "./common.steps"; // Import common steps

Then("I will be on the profile page", () => {
  cy.url().then((url) => {
    expect(url).to.include("/profiles/");
  });
});
