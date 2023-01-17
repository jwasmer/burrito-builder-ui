describe('OrderForm view', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: 'order' })
  })
  it('Should have a an input field for the name of the orderer', () => {
    cy.get('[data-cy="name-input"]').should.exist
  })
  it('Should buttons allowing a user to select ingredients for the order', () => {
    cy.get('[data-cy="button-beans"]').should.exist
    cy.get('[data-cy="button-lettuce"]').should.exist
    cy.get('[data-cy="button-carnitas"]').should.exist
    cy.get('[data-cy="button-queso fresco"]').should.exist
    cy.get('[data-cy="button-jalapenos"]').should.exist
    cy.get('[data-cy="button-steak"]').should.exist
    cy.get('[data-cy="button-sofritas"]').should.exist
    cy.get('[data-cy="button-hot sauce"]').should.exist
    cy.get('[data-cy="button-guacamole"]').should.exist
    cy.get('[data-cy="button-cilantro"]').should.exist
    cy.get('[data-cy="button-sour cream"]').should.exist
  })
  it('Should have a text field that displays what ingredients have already been added', () => {
    cy.get('[data-cy="order-confirmation"]').should.exist
  })
  it('Should have a submit order button', () => {
    cy.get('[data-cy="submit-order"]').should.exist
  })
  it('Should have a clear inputs button', () => {
    cy.get('[data-cy="clear-inputs"]').should.exist
  })
})

describe('OrderForm interaction', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: 'order' })
  })
  it('Should allow a user to enter a name in the input', () => {
    cy.get('[data-cy="name-input"]').type("Sam")
  })
  it('Should allow a user to enter ingredients and display them when clicked', () => {
    cy.get('[data-cy="name-input"]').type("Sam")
    cy.get('[data-cy="button-steak"]').click()
    cy.get('[data-cy="button-pico de gallo"]').click()
    cy.get('[data-cy="button-lettuce"]').click()
    cy.get('[data-cy="button-queso fresco"]').click()
    cy.get('[data-cy="button-carnitas"]').click()
    cy.get('[data-cy="button-jalapenos"]').click()
    cy.get('[data-cy="order-confirmation"]').contains("Order: steak, pico de gallo, lettuce, queso fresco, carnitas, jalapeno")
    cy.get('[data-cy="submit-order"]').click()
  })
})