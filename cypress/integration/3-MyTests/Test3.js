/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('click on add to cart', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Checkbox
        cy.log("Checkbox")

        // check option 1 whit # selector        
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // Check option 2 and 3 with css selector
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // Static DropDown
        cy.log("Static DropDown")
        cy.get('select').select('option2').should('have.value', 'option2')        

        // Dynamic DropDown - autocomplete
        cy.log("Dynamic DropDown - autocomplete")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        
        // Element Displayed Example
        cy.log("Element Displayed Example")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    });
});
