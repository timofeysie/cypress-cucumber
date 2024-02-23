import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../page_objects/HomePage';

Given('I am on the HomePage', () => {
  cy.visit('/');
});

When('I click the {string} link', (linkText) => {
  if (linkText === 'Sign in') {
    HomePage.clickSigninLink();
  }
  //  else if (linkText === 'Refresh Posts') {
  //   HomePage.clickRefreshPostsButton();
  // }
});

Then('I should be on the Sign in page', () => {
  // Add assertions or further actions related to the Posts page
  // For example: cy.url().should('include', '/posts');
  cy.url().should('include', '/signin');
});

// Then('the posts should be refreshed', () => {
//   // Add assertions or further actions related to refreshing posts
// });
