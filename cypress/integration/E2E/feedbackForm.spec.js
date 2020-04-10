describe('Feedback test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('Load feedback form', ()=>{
       cy.get('form').should('be.visible')
    })

    it('Fill feedback form', ()=>{
        cy.get('#name').type('Toni Cabrera')
        cy.get('#email').type('test@email.com')
        cy.get('#subject').type('Asunto....')
        cy.get('#comment').type('Hola querido amigo, te escribo para contarte...')
    })

    it('Submit feedback form', ()=>{
        cy.contains('Send Message').click()
    })
    it('Display feedback message', ()=>{
        cy.contains('Thank you for your comments')
    })

})