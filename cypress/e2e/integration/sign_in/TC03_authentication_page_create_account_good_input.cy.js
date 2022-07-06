// Automation test for creating a new account without random email generator - good input
import {pages} from "../pages/pages.cy.js"

describe('Authentication page - section for create account - good input', function(){
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
            cy.get('#email_create').should('be.visible').type(pages.RandomEmail(5))                     // Checks email input field and inserts value
            cy.get('#SubmitCreate').contains('Create an account').should('be.visible').click()          // Checks section button and then clicks
        })
    })

    it('Verify that create an accout section leads to create an account page', function(){
        cy.url().should('include', 'account-creation')                                                  // Checks URL
    })
})