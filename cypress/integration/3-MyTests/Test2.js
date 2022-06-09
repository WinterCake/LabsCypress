/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('click on add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Parents child chaining
        cy.get('.products').as('productLocator')        
        // cy.get(':nth-child(3) > .product-action > button').click()        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const text = $el.find('h4.product-name').text()
            if (text.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('.cart-preview > .action-block > button').click()
        // cy.get('button').click()
        cy.get(':nth-child(14)')
  
    });
});
