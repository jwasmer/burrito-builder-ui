describe('App view', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: 'order' })
  })
  it('Should have a header', () => {
    cy.get('[data-cy="header"]').contains('Burrito Builder')
  })
  it('Should have an existing order with ingredients', () => {
    cy.get('[data-cy="order-1"]').should.exist
    cy.get('[data-cy="header-1"]').contains("Pat")
    cy.get('[data-cy="ingredient-1"]').contains("beans")
    cy.get('[data-cy="ingredient-2"]').contains("lettuce")
    cy.get('[data-cy="ingredient-3"]').contains("carnitas")
    cy.get('[data-cy="ingredient-4"]').contains("queso fresco")
    cy.get('[data-cy="ingredient-5"]').contains("jalapenos")
    cy.get('[data-cy="ingredient-6"]').contains("beans")
  })
})