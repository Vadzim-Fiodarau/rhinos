import { onRhinoDisplaed } from './../../support/page_objects/rhinoDisplayedInTable'

describe('Make sure that newly just created Rhino displayed in table', ()=>{
    beforeEach('open application', () => {
        cy.openPageHome()
    })

    it('Test fail', () => {
        onRhinoDisplaed.rhinoDisplayed('Clyde500', 'javan_rhinoceros')
    })
})
