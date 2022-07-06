export const pages = {                                                              // Exports data
    elements:{
        radioButton: "id_gender1"                                                   // Creates variable
    },

    OpenSignInPage(){                                                               // Creates method
        // Opens the site homepage
        cy.visit('http://automationpractice.com/index.php')

        // Clicks on the sign in button
        cy.get('.nav').children().contains('Sign in').click()

        // Checks page header
        cy.get('.page-heading').contains('Authentication').should('be.visible')
    },

    RandomEmail(lenght){
        let randomString = [...Array(lenght)].map(() => (~~(Math.random()*36)).toString(36)).join("")    // Random 5 chars
        let randomMailFormat = `${randomString}@ptt.rs`                                                  // Connect strings

        return randomMailFormat
    }
}