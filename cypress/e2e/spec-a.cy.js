/// <reference types="cypress" />

describe('Spec A', () => {
  it('passes test a', () => {
    cy.wait(5000)
  })

  it('passes test b', () => {
    cy.wait(5000)
  })

  it('passes test c', () => {
    cy.wait(5000)
  })

  it('fails test d', () => {
    cy.wait(5000)
    cy.wrap(true).should('be.false')
  })
})
