/// <reference types="Cypress" />

const credentials = {
  'First Name': 'Ali',
  'Last Name': 'Ahmad',
  'Email Address': 'muhammad.ali+57@ceative.co.uk',
  'Password': '123asd@ASD'
}

beforeEach('Open Application', () => {

  cy.visit(Cypress.config().baseUrl)
  cy.wait(1000)
  cy.url().then((url) => {
    //cy.wait(500)
    if (url.includes(`${Cypress.config('baseUrl')}/home`)) {
      cy.wait(20000)
      cy.get('[class="MuiTouchRipple-root css-w0pj6f"]').last().click({ force: true })
      //cy.contains('Logout').click()
      cy.get('[class="font-weight-400 tertiary-title "]').should('contain', 'Logout').last().click()
      cy.wait(1000)
    } else {
      cy.wait(500)
    }
  });
})

describe('1st Test', () => {

  it('Log-In to SMD', () => {
    //cy.visit(Cypress.config().baseUrl)
    cy.get('[id="email"]').click().type(credentials["Email Address"])
    //cy.get('[id="email"]').click().type('muhammad.ali+6@ceative.co.uk')
    cy.get('[id="password"]').click().type(credentials["Password"])
    //cy.contains("Sign In").click()
    cy.get('.MuiButtonBase-root').first().click()

  })
})