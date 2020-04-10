describe('Login/Logout', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()

    })


    it('Try to login with invalid data', ()=> {
        cy.get('#login_form').should('be.visible')
        cy.get('input[name="user_login"]').type('wrong_user')
        cy.get('input[name="user_password"]').type('1234')
        cy.contains("Sign in").click()
    })

    it('Display error message', ()=> {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

    it('Login with valid data', ()=> {
        cy.fixture('user').then( user => {
            const myUsername = user.id
            const myPassword = user.pwd

            cy.get('input[name="user_login"]').type(myUsername)
            cy.get('input[name="user_password"]').type(myPassword)
            cy.contains("Sign in").click()
        })
        
    })

    it('Logout from application', ()=> {
        cy.get('.icon-user').click()
        cy.get('#logout_link').click()

        cy.url().should('include', 'index.html')
    })


})