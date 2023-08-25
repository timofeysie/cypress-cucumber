const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber());
        },
        // implement node event listeners here
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        chromeWebSecurity: false,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        baseUrl: "http://localhost:3000/",
    },
});
