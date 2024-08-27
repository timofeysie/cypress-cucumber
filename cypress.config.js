const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber());
        },
        projectId: "mt9tss", // cloud integration
        // implement node event listeners here
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        chromeWebSecurity: false,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        // baseUrl: "https://dot-one-26b272efdbb8.herokuapp.com/", // my moments
        // baseUrl: "https://unified-moments.herokuapp.com/", // official site
        // baseUrl: "https://from-house-to-home-b7afcfcc32e9.herokuapp.com/",
        // baseUrl: "https://connectify-frontend-6f920dea36d9.herokuapp.com",
        baseUrl: "https://forever-foundations-e27644123eb0.herokuapp.com/"
    },
});
