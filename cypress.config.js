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
        // baseUrl: "https://forever-foundations-e27644123eb0.herokuapp.com/"
        // baseUrl: "https://auctionghetto-65bba3a96be0.herokuapp.com/"
        // baseUrl: "https://ci-pp5-property-react-1c4b35a4e2b5.herokuapp.com/"
        // baseUrl: "https://product-comparison-site-20f390de390b.herokuapp.com/"
        // baseUrl: "https://socialorange-8e2adf553f1c.herokuapp.com/" // doesn't work
        // baseUrl: "https://pp5-task-manager-frontend-eebb66e2c99d.herokuapp.com/" // works
        // baseUrl: "https://book-nook-react-acffc4887a25.herokuapp.com/" // works
        // baseUrl: "https://housegram-fullstack-app-a01c6177ffd8.herokuapp.com/" // doesn't work
        // baseUrl: "https://django-rest-ap-9a62d525c1f0.herokuapp.com/", // works
        baseUrl: "https://cup-backend-3976f813200f.herokuapp.com/"
    },
});
