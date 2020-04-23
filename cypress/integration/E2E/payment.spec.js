describe('New Payment', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.myLogin()
   
    })


    it('Click on Pay Bills tab', ()=>{
        cy.contains('Pay Bills').click()
    })


    it('Select values on the form', ()=>{
        // Select Payee
        cy.get('#sp_payee').select('Apple')

        // Select account
        cy.get('#sp_account').select('Credit Card')

        // Introduce amount
        cy.get('[name="amount"]').type('2000')

        // Select date from calendar
        cy.get('#sp_date').type('2020-04-22 {enter}')

        // Enter description
        cy.get('#sp_description').type('Mother Phoque')

        // Click on Pay
        cy.get('#pay_saved_payees').click()

    })


    it('Verify success message', ()=>{
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    })

})