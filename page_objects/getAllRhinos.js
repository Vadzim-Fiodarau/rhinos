export class GetAllRhinos {

    getRhinosWithEmptyValue(){
        cy.intercept('GET', 'http://localhost:4000/rhinoceros?').as('getRhinos')

        cy.get('.rhino-inputs form').then(form => {
            cy.wrap(form).eq(1).find('input').should('contain', '')
            cy.wrap(form).eq(1).find('button').click()


        })

        cy.wait('@getRhinos').then(xhr => {
            const rhinosAmount = xhr.response.body.rhinoceroses.length
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.response.body.rhinoceroses.length).to.equal(rhinosAmount)

        })
    }

}

export const onGetAllRhinos = new GetAllRhinos()