describe('App render the title', function() {
  it('finds the content "title"', function() {
    cy.visit('http://localhost:3000')

    cy.contains('Triam Udom Open House')
    cy.contains('2019')
  })
})

describe('App render scroll text', function() {
  it('finds the content "scroll"', function() {
    cy.visit('http://localhost:3000')

    cy.contains('S C R O L L')
  })
})
