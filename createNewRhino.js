describe('Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros"', ()=> {
    
    it('Create a new rhino', () => {
        cy.visit('/')

        cy.intercept('POST', 'http://localhost:4000/rhinoceros').as('createRhionos')

        cy.get('.rhino-inputs form').then(form => {
            cy.wrap(form).first().find('[id="create_rhino_name"]').type('Clyde5000')
            cy.wrap(form).first().find('[id="create_rhino_species"]').type('javan_rhinoceros')
            cy.wrap(form).first().find('button').click()

        })

        cy.wait('@createRhionos').then(xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.name).to.equal('Clyde5000')
            expect(xhr.request.body.species).to.equal('javan_rhinoceros')
            expect(xhr.response.body.name).to.equal('Clyde5000')
            expect(xhr.response.body.species).to.equal('javan_rhinoceros')
        })
    })
})