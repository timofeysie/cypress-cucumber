# Your First Gherkin

This tutorial walks you through using the Gherkin assertion library with Cypress for frontend testing to enable Behavior Driven Development.

[Cypress](https://docs.cypress.io/guides/overview/why-cypress) is a frontend testing tool built for web apps.

[Cucumber](https://cucumber.io/school/) enables Behavior-Driven Development (BDD).

Tests can be written in [Gherkin Syntax](https://cucumber.io/docs/gherkin/) which is called 'human readable'.

The goal is to write a test with natural language such as "Given I am on the homepage, when I click the 'Posts' link, then I should be on the Posts page".

Here we work from a raw Javascript to provide a base for a Cucumber file using gherkin syntax in a yml format to use natural language like the above to test our web app.

Imagine we have a web page with a nav elements we want to test.

In this example we use the cypress\support\page_objects\PostsList.js file this project like this:

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

This is a support [Page Object Model](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b) which is a design pattern to use an object to represent the page for use in testing.

It uses the Cypress Query [get](https://docs.cypress.io/api/commands/get) to get a DOM elements by a selector which can be used by the 'postsLink' getter function.

Imagine this nav-spec.js file uses the above page object to test the list on the web app:

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

This is a plain cypress test and does not provide the readable specification shown above.  To do that we need the power of cucumber and gherkin.

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
