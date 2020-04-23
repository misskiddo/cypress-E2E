describe('New Payee Test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.myLogin()

    })

    it('Add New payee to the list', ()=>{
        cy.get('#pay_bills_tab').click()
        cy.get('#tabs').should('be.visible')
        cy.contains('Add New Payee').click()

        cy.get('#np_new_payee_name').type('payee#1')
        cy.get('#np_new_payee_address').type('4930 Avenue de Melrose')
        cy.get('#np_new_payee_account').type('Electricidad')
        cy.get('#np_new_payee_details').type('Toda esa puta electricidad')

        cy.get('#add_new_payee').click()

        
    })


    it('Display sucess message', ()=>{
        cy.get('#alert_content').should('be.visible').and('contain', 'was successfully created.')
        
    })






})