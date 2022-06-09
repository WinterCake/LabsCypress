/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('click on add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Window Alert 
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.get('.nav-outer > .main-menu > .navbar-collapse > .navigation > .current > a')
        .should('be.visible')
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')

        // Navigation précédent / Suivant
        cy.go('back')

        cy.url().should('include', 'https://rahulshettyacademy.com/AutomationPractice/')
    });
});
