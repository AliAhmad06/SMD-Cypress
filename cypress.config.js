/// <reference types="Cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth:1440,
  defaultCommandTimeout: 3000,
  env: {
    Email: 'muhammad.ali+57@ceative.co.uk',
    Password: '123asd@ASD'
  },
  e2e: {
    slowTestThreshold: 2000,
    baseUrl: 'https://app-dev.sharemydine.co.uk',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});