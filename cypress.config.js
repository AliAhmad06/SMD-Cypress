/// <reference types="Cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Email: 'muhammad.ali+57@ceative.co.uk',
    Password: '123asd@ASD'
  },
  e2e: {
    baseUrl: 'https://app-dev.sharemydine.co.uk',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});