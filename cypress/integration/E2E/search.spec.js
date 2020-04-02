describe('SearchBox Test', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Type into searchbox and click ENTER', ()=>{
        cy.get('#searchTerm').type('Money {enter}')

    })

    it('Show search results page', ()=>{
        cy.title().should('be.equal', 'Zero - Search Tips')
        cy.get('h2').contains('Search Results')

    })







})