/// <reference types="cypress" />

describe('Test 2 - Logowanie i wylogowanie', () => {
  it('Logowanie i wylogowanie', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get('#user_email').type('testowyqa@qa.team');
    cy.get('#user_password').type('QA!automation-1');
    cy.contains('Log In').click();
    cy.get('.header-user-avatar').click();
    cy.get('.header-menu').contains('Log out').click();
    cy.url().should('include', '/account/login');
  })
})
