describe('Testing Code-Breaker', function(){

    it('Check if both inputs and their responses are right', function(){

        cy.visit('http://localhost:3001')
    
        cy.get('#secret-input')
            .type('1234')
            .should('have.value', '1234')

        cy.get('#secret-button')
            .click()  
        cy.contains('ok, let the game begin')
        
        cy.get('#guess-input')
            .type('1234')
            .should('have.value', '1234')

        cy.get('#guess-button')
            .click()  
        cy.contains('XXXX')    
    });

});