
describe('Verify that when filtering by "javan_rhinoceros" in the GET action, the newly created rhino is present in the search result.', ()=> {
    it('Verify filter by "javan_rhinoceros"', ()=>{
        cy.visit('/')

        cy.get('.rhino-inputs form').then(form => {
            cy.wrap(form).eq(1).find('[id="create_rhino_species"]').type('javan_rhinoceros')
            cy.wrap(form).eq(1).find('button').click()


        })

        cy.get('table').should('contain', 'Clyde500').and('contain', 'javan_rhinoceros')
    })
})