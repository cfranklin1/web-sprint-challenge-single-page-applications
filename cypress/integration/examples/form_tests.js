describe('Verify "submit" New Pizza Order Test', function() {
    it('(clicks pizza button/build link/pizza link), (Types in a name/Selects pizza size/Toppings)', function() {  
        let i = 0;
        for (i = 0; i < 1 ; i++) {     
            cy.visit("index.html")

            cy.get('.pizza-button').click()
            cy.get('.build-link').click()
            cy.get('.pizza-link').click()

            cy.get('[name=username]').type("Camille")
            cy.get('select').select('MED')
            cy.get('[name=pepperoni]').click()
            cy.get('[name=bacon]').click() 
            cy.get('[name=instructions]').type("deliver in an hour")

            cy.get('[type=submit]').click()
        }

    })
  
})


// describe('Multiple Toppings Test', function() {
//     it('Selects multiple toppings', function() {
//         cy.visit("index.html")
//         

//     })
// })

// describe('Submit Test', function() {
//     it('Clicks the submit button', function() {
//         cy.visit("index.html");
//         cy.contains('submit').click()

//     })
