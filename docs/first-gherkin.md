# Your First Gherkin

We have a page file to get the elements we want to test that looks like this:

```js
class NavPage {
    // Elements
    get postsLink() {
        return cy.get('nav a[href="/"]');
    }
    ...
    // Actions
    clickPostsLink() {
        this.postsLink.click();
    }
    ...
}
```

Imagine this nav-spec.js file to test the list on the official Redux example app:

```js
import PostsList from '../support/page_objects/PostsList';

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming this is the URL of your page
  });

  it('should navigate to Posts page', () => {
    PostsList.clickPostsLink();
    // Add assertions or further actions related to the Posts page
  });

  it('should refresh posts when Refresh Posts button is clicked', () => {
    PostsList.clickRefreshPostsButton();
    // Add assertions or further actions related to refreshing posts
  });

});
```

This is a plain cypress test, but does not provide the readable specification power of cucumber and gherkin.

If we want to convert the above to use cucumber with gherkin, this is what it would look like.

We have a cypress\support\step_definitions\navigation.steps.js file that contains our cucumber assertions:

```js
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
```

The steps definition file connects the gherkins feature file to the PO.

The cucumber test with gherkin syntax in a yml format looks like this:

```yml
Feature: Navigation

  Scenario: Navigating to Posts page
    Given I am on the homepage
    When I click the "Posts" link
    Then I should be on the Posts page
```
