/// <reference types="Cypress" />

describe('My First Test', () => {
    // it('My Second case', () => {
    //     expect(true).to.equal(true)
    // })
    // it('"ca" without Visible', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product').should('have.length', 4)
    // })
    // it('"ca" With Visible', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product:visible').should('have.length', 4)
    // })
    // it('find products and product', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product:visible').should('have.length', 4)
    //     cy.get('.products').find('.product').should('have.length', 4)
    // })
    // it('click on add to cart', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product:visible').should('have.length', 4)
    //     // Parents child chaining
    //     cy.get('.products').find('.product').should('have.length', 4)
    //     cy.get(':nth-child(3) > .product-action > button').click()
    //     cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    // })
    // it('click on add to cart', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product:visible').should('have.length', 4)
    //     // Find a particular text and click on it 
    //     cy.get('.products').find('.product').each(($el, index, $list) => {
    //         const text = $el.find('h4.product-name').text()
    //         if (text.includes('Cashews')) {
    //             cy.wrap($el).find('button').click()
    //         }
    //     })
    // })
    // it('click on add to cart', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     cy.get('.product:visible').should('have.length', 4)
    //     // Find a particular text and click on it 
    //     cy.get('.products').find('.product').each(($el, index, $list) => {
    //         const text = $el.find('h4.product-name').text()
    //         if (text.includes('Cashews')) {
    //             cy.wrap($el).find('button').click()
    //         }
    //     })
    //     // récupère le "cy.get('.brand')" element et le met dans la variable logoelement, 
    //     // elle même utiliser dans la function
    //     cy.get('.brand').then(function(logoelement) {
    //         cy.log(logoelement.text())
    //     })     
    //     // Exemple qui ne marche pas 
    //     // cy.log(cy.get('.brand').text())
    // })
    // it('click on add to cart', () => {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //     cy.get('.search-keyword').type('ca')
    //     cy.wait(2000)
    //     //selenium get hit url in browser, cypress get acts like findElement of selenium
    //     cy.get('.product').should('have.length', 5)
    //     cy.get('.product:visible').should('have.length', 4)
    //     // Parents child chaining
    //     cy.get('.products').as('productLocator')
    //     cy.get('@productLocator').find('.product').should('have.length', 4)
    //     cy.get(':nth-child(3) > .product-action > button').click()

    //     // console log AVEC gestion de promesse
    //     cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
    //         console.log('sf1');
    //     })        

    //     // console log SANS gestion de promesse
    //     console.log('sf2');
        
    //     cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    //         const text = $el.find('h4.product-name').text()
    //         if (text.includes('Cashews')) {
    //             cy.wrap($el).find('button').click()
    //         }
    //     })
    //     // récupère le "cy.get('.brand')" element et le met dans la variable logoelement, 
    //     // elle même utiliser dans la function
    //     cy.get('.brand').then(function(logoelement) {
    //         cy.log(logoelement.text())
    //     })     
    // });
    it('click on add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        // Parents child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const text = $el.find('h4.product-name').text()
            if (text.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        
        //assert logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // récupère le "cy.get('.brand')" element et le met dans la variable logoelement, 
        // elle même utiliser dans la function
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })     
    });
});
