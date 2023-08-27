import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PostsList from '../page_objects/PostsList';

Given('I am on the homepage', () => {
  cy.visit('/');
});

When('I click the {string} link', (linkText) => {
  if (linkText === 'Posts') {
    PostsList.clickPostsLink();
  } else if (linkText === 'Refresh Posts') {
    PostsList.clickRefreshPostsButton();
  }
});

Then('I should be on the Posts page', () => {
  // Add assertions or further actions related to the Posts page
  // For example: cy.url().should('include', '/posts');
});

Then('the posts should be refreshed', () => {
  // Add assertions or further actions related to refreshing posts
});
