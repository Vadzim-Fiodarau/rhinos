import { onGetAllRhinos } from '../../support/page_objects/getAllRhinos'

describe('Make sure that filter without any value get all rhinos from system', () => {

    beforeEach('open application', () => {
        cy.openPageHome()
    })

    it('Get all rhinos without value', () => {
        onGetAllRhinos.getRhinosWithEmptyValue()

    })
})
