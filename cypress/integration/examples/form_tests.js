
describe('Name Input Test', function() {
    it('Types in a name', function() {
        cy.visit("index.html")
        cy.get('[name=username]').type("Camille")

    })
})


describe('Multiple Toppings Test', function() {
    it('Selects multiple toppings', function() {
        cy.visit("index.html")
        cy.get('[type=checkbox]').click()

    })
})

describe('Submit Test', function() {
    it('Clicks the submit button', function() {
        cy.visit("index.html");
        cy.contains('submit').click()

    })
})
