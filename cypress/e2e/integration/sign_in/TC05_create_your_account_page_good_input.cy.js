// Automation test for creating an new account - good input
import {pages} from "../pages/pages.cy.js" 

describe('Create an account page - create account - good input', function(){
    it('Open homepage', function(){                                                                     // Opens the site homepage
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Click on sign in button', function(){                                                           // Clicks on the sign in button
        cy.get('.nav').children().contains('Sign in').click()
    })

    it('Check page header', function(){                                                                 // Checks page header
        cy.get('.page-heading').contains('Authentication').should('be.visible')
    })

    it('Insert value into email input field - good input', function(){
        cy.get('#create-account_form').within(($form) => {
            cy.contains('Create an account').should('be.visible')                                       // Checks section header
            cy.get('#email_create').should('be.visible').type('test_1@ptt.rs')                          // Checks email input field and inserts value
            cy.get('#SubmitCreate').contains('Create an account').should('be.visible').click()          // Checks section button and then clicks
        })
    })

    it('Verify that create an accout section leads to create an account page', function(){
        cy.url().should('include', 'account-creation')                                                  // Checks URL
    })

    it('Insert values into the create an account form - good input', function(){
        cy.get('#account-creation_form').within(($form) => {
            cy.contains('Your personal information').should('be.visible')                               // Checks section header
            cy.get(pages.elements.radioButton).check('1')                                               // Checks radio button for 'Mr.'
            cy.get('#customer_firstname').should('be.visible').type('Peter')                            // Inserts value into name input field
            cy.get('#customer_lastname').should('be.visible').type('Peterson')                          // Inserts value into last name input field
            cy.get('#passwd').should('be.visible').type('maximum')                                      // Inserts value into password input field
            cy.get('#days').select('1').should('have.value', '1')                                       // Selects '1' in dropdown list which uses 'select' tag
            cy.get('#months').select('March').should('have.value', '3')                                 // Selects 'March' in dropdown list which uses 'select' tag
            cy.get('#years').select('1950').should('have.value', '1950')                                // Selects '1995' in dropdown list which uses 'select' tag
            cy.get('#newsletter').check('1')                                                            // Checks newsletter checkbox
            cy.get('#optin').check('1')                                                                 // Checks special offers checkbox

            cy.contains('Your address').should('be.visible')                                            // Checks section header
            cy.get('#firstname').should('be.visible').type('Peter')                                     // Inserts value into name input field
            cy.get('#lastname').should('be.visible').type('Peterson')                                   // Inserts value into last name input field
            cy.get('#company').should('be.visible').type('Texas Instruments Inc')                       // Inserts value into company input field
            cy.get('#address1').should('be.visible').type('12357 Riata Trace Pkwy #130')                // Inserts value into address input field
            cy.get('#address2').should('be.visible').type('First floor')                                // Inserts value into address 2 input field
            cy.get('#city').should('be.visible').type('Austin, TX')                                     // Inserts value into city input field
            cy.get('#id_state').select('Texas').should('have.value', '43')                              // Selects 'Texas' in dropdown list which uses 'select' tag
            cy.get('#postcode').should('be.visible').type('78727')                                      // Inserts value into zip/postal code input field
            cy.get('#id_country').select('United States').should('have.value', '21')                    // Selects 'United States' in dropdown list which uses 'select' tag
            cy.get('#other').should('be.visible').type('Report to security guard.')                     // Inserts value into additional information textarea
            cy.get('#phone').should('be.visible').type('711711')                                        // Inserts value into home phone input field
            cy.get('#phone_mobile').should('be.visible').type('177177177')                              // Inserts value into mobile phone input field
            cy.get('#alias').should('be.visible').type('Cowboy')                                        // Inserts value into addres alias input field
            cy.get('#submitAccount').contains('Register').should('be.visible').click()                  // Clicks on register button
        })
    })

    it('Verify that create an accout page leads to my account page', function(){
        cy.url().should('include', 'my-account')                                                        // Checks URL
    })
})