import { onCreateNewRhino } from './../../support/page_objects/createRhino'

describe('Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros"', () => {
    beforeEach('open application', () => {
        cy.openPageHome()
    })

    it('Create a new rhino', () => {
        onCreateNewRhino.createRhino('Clyde5000', 'javan_rhinoceros')
    })
})
