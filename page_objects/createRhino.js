export class CreateNewRhino {

    createRhino(name, species) {
        cy.intercept('POST', 'http://localhost:4000/rhinoceros').as('createRhionos')

        cy.get('.rhino-inputs form').then(form => {
            cy.wrap(form).first().find('[id="create_rhino_name"]').type(name)
            cy.wrap(form).first().find('[id="create_rhino_species"]').type(species)
            cy.wrap(form).first().find('button').click()

        })

        cy.wait('@createRhionos').then(xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.name).to.equal(name)
            expect(xhr.request.body.species).to.equal(species)
            expect(xhr.response.body.name).to.equal(name)
            expect(xhr.response.body.species).to.equal(species)
        })
    }
}

export const onCreateNewRhino = new CreateNewRhino()