// Automation test for opening home page and opening 'Sign in' page

describe('Open site homepage and open sign in page', function(){
    it('Open homepage', function(){                                                 // Opens the site homepage
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Click on sign in button', function(){                                       // Clicks on the sign in button
        cy.get('.nav').children().contains('Sign in').click()
    })

    it('Check page header', function(){                                             // Checks page header
        cy.get('.page-heading').contains('Authentication').should('be.visible')
    })
})