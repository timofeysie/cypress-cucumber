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
  cy.url().should('include', '/signin');
});

And('I enter the username {string}', (username)=> {
  HomePage.typeUsername(username);
})

And('I enter the password {string}', (password)=> {
  HomePage.typePassword(password);
})

And('I click on the sign in button', ()=> {
  HomePage.clickSignin()
})

Then('I will be signed in', ()=> {
  cy.url().should('contains' , '/');
})

Then('Error message should be displayed', () => {
  HomePage.elements.errorMessageLogin().should('have.text','Incorrect username or password.')
})
