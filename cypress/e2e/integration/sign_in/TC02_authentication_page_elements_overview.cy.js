// Automation test for authentication page elements overview
import {pages} from "../pages/pages.cy.js"                                                              // Imports data from 'pages' file

describe('Authentication page elements overview', function(){
    it('Go to log in page', function(){                                                                 // Opens the site homepage
        pages.OpenSignInPage()                                                                          // Calls method
    })

    it('Check breadcrumb', function(){                                                                  // Checks breadcrumb
        cy.get('.breadcrumb').contains('Authentication').should('be.visible')
    })

    it('Check section for creating account', function(){
        cy.get('#create-account_form').within(($form) => {
            cy.contains('Create an account').should('be.visible')                                       // Checks section header
            cy.contains('Please enter your email address to create an account.').should('be.visible')   // Checks section description
            cy.contains('Email address').should('be.visible')                                           // Checks section email label
            cy.get('#email_create').should('be.visible')                                                // Checks section email input
            cy.get('#SubmitCreate').contains('Create an account').should('be.visible')                  // Checks section button
        })
    })

    it('Check section for already registered users', function(){
        cy.get('#login_form').within(($form) => {
            cy.contains('Already registered?').should('be.visible')                                     // Checks section header
            cy.contains('Email address').should('be.visible')                                           // Checks section email label
            cy.get('#email').should('be.visible')                                                       // Checks section email input
            cy.contains('Password').should('be.visible')                                                // Checks section password label
            cy.get('#passwd').should('be.visible')                                                      // Checks section password input
            cy.get('.lost_password').contains('Forgot your password?').should('be.visible')             // Checks section hyperlink
            cy.get('#SubmitLogin').contains('Sign in').should('be.visible')                             // Checks section button
        })
    })
})