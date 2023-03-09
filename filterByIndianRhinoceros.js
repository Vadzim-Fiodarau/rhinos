describe('Verify that when filtering by "indian_rhinoceros" in the GET action, the newly created rhino is NOT present in the search result', ()=> {

    it.only('Verify filte by "indian_rhinoceros" ', ()=>{
        cy.visit('/')

        cy.get('.rhino-inputs form').then(form => {
            cy.wrap(form).eq(1).find('[id="create_rhino_species"]').type('indian_rhinoceros')
            cy.wrap(form).eq(1).find('button').click()


        })

        cy.get('table').then( table => {
           expect(cy.wrap(table)).not.to.equal('javan_rhinoceros')
           expect(cy.wrap(table)).not.to.equal('Clyde500')
        })

    })
})