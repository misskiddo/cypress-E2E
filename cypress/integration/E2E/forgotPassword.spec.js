describe('Forgot password', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Click on Signin', ()=>{
        cy.get('#signin_button').click()
    })

    it('Click on forgot password', ()=>{
        // cy.get('.offset3 > a').click()
        cy.contains('Forgot your password').click()
    })

    it('Fill email form and submit', ()=>{
        const emailSent = "test@email.com"
        cy.get('#user_email').type(emailSent)
        cy.get('input[name="submit"]').click()
        cy.contains(emailSent)
    })

   
    



})