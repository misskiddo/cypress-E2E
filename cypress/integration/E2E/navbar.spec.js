describe('Navigation page', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })


    it('Click on Banking', ()=>{
        cy.contains('Online Banking').click()
        cy.url().should('contains', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('Click on Feedback', ()=>{
        cy.contains('Feedback').click()
        cy.url().should('contains', 'feedback.html')
        cy.get('h3').contains('Feedback')

    })

    it('Click on Homepage', ()=>{

        //By.xpath("//a[@class='brand']"
        cy.xpath('//a[@class="brand"]').click()
        cy.url().should('contains', 'index.html')
     
    })


})