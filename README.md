# Cypress Cucumber Gherkin

This project is designed to test the [React Redux TypeScript Example](https://github.com/timofeysie/redux-typescript-example) using Cypress and Cucumber with Gherkin syntax.

## Cucumber Cypress Automation Testing

This is a Cypress end-to-end testing project that uses Cucumber and Gherkin.

The [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) implements end-to-end browser tests.

[Cucumber](https://cucumber.io/school/) enables Behavior-Driven Development (BDD).

To accomplish this within Cypress we use the [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).

*[Cypress Cucumber Preprocessor](https://www.browserstack.com/guide/cypress-cucumber-preprocessor) is a plugin for the Cypress testing framework that allows you to write end-to-end tests using the Cucumber testing framework‘s Gherkin syntax* created by [Browserstack](https://www.browserstack.com/) which is a company that allows you to test your site or app on *20,000+ real devices* as they claim.

Tests can be written in [Gherkin Syntax](https://cucumber.io/docs/gherkin/) which is part of Cucumber.

## Workflow

After cloning the repo, first run ```npm install```.

To run the tests:

```shell
npx cypress open
```

## Configuration Installation Steps

If you want to re-create your own version of this great testing app, follow the steps below.

Otherwise, you can just clone this repo and follow the steps in the [create your first gherkin](/docs/first-gherkin.md) tutorial and get started that way.

This project was created with the following steps.

```shell
npm init // To create the project package.json
npm install –save-dev cypress@12.5.1 // To install the latest cypress versions
./node_modules/.bin/cypress open ( This is used to get the necessary default configs in place).
```

Once the initial setup is completed, go to cypress.config.js and add the following commands.

Note these commands should be inside the ```e2e : {}``` section:

```shell
{
    specPattern: "cypress/e2e/\*_/_.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    baseUrl: "https://devappcf.quantflo.com/",
},
```

This needs to be changed to use the config:

```js
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.excludeSpecPattern = "**/examples/*.js"; // ignoreTestFiles configuration option is now invalid
      config.specPattern = "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}";
      config.chromeWebSecurity = false;
      config.defaultCommandTimeout = 10000;
      config.pageLoadTimeout = 120000;
      config.baseUrl = "http://localhost:3000/";
      return config;
    },
  },
});
```

Using excludeSpecPattern also caused this error: *The ignoreTestFiles configuration option is now invalid when set on the config object in Cypress version 10.0.0. It is now renamed to excludeSpecPattern and configured separately as a testing type property: e2e.excludeSpecPattern*

```js
{
  e2e: {
    specPattern: '...',
  },
}
```

## Installing cypress xpaths

Enter the following command on the terminal to install [cypress-xpath](https://www.npmjs.com/package/cypress-xpath):

```shell
npm install -D cypress-xpath
```

And add the following code line in the e2e.js file in the support folder.

```js
require('cypress-xpath');
```

## Setting up Cucumber

Enter the following command on the terminal

```shell
npm install --save-dev cypress-cucumber-preprocessor
```

The following const should be added to cypress.config.js file:

```js
const cucumber = require('cypress-cucumber-preprocessor').default
```

Afterwards in the same file inside setupNodeEvents the following code should be added

```js
on('file:preprocessor', cucumber())
```

Goto the package.json file and add the following

```json
"cypress-cucumber-preprocessor": {
"nonGlobalStepDefinitions": false,
"stepDefinitions": "cypress/support/step_definitions/",
```

Next the following extension should be added into visual studio code:

Extension Name : Cucumber (Gherkin) Full Support

Next goto the settings of the installed extension and click edit in settings.json and add the following

```json
"cucumberautocomplete.customParameters": [
],
"cucumberautocomplete.strictGherkinCompletion": true,
"cucumberautocomplete.steps": [
    "cypress/support/step_definitions/*.js"  //This is to run all the step definitions
],
```

To run the code

```shell
npx cypress open
```
