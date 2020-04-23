// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('myLogin', () =>{

    cy.fixture('user').then( user => {

        cy.clearCookies({log:true})
        const myUsername = user.id
        const myPassword = user.pwd

        cy.get('input[name="user_login"]').type(myUsername)
        cy.get('input[name="user_password"]').type(myPassword)
        cy.get('#user_remember_me').click()
        cy.contains("Sign in").click()
    })
})

Cypress.Commands.add('myLogin2', (username, password) =>{

    cy.fixture('user').then( user => {

        cy.clearCookies({log:true})
   
        cy.get('input[name="user_login"]').type(username)
        cy.get('input[name="user_password"]').type(password)
        cy.get('#user_remember_me').click()
        cy.contains("Sign in").click()
    })
})