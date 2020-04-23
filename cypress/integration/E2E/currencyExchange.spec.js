describe('Currency Exchange', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.myLogin2('username', 'password')
    })

    it('Click on Pay Bills tab', ()=>{
        cy.contains('Pay Bills').click()
        cy.contains('Purchase Foreign Currency').click()
    })

    it('Select currency', ()=>{
        cy.get('#pc_currency').select('CAD')
       // cy.get('#pc_amount').type(2000)
        cy.get('#pc_inDollars_true').click()
        cy.contains('Calculate Costs').click()


    })

    it('Verify amount', ()=>{
        cy.get('pc_conversion_amount').should('be.visible')
    })



})