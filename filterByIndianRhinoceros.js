import { onFilterRhino } from '../../support/page_objects/filterRhino'

describe('Verify that when filtering by "indian_rhinoceros" in the GET action, the newly created rhino is NOT present in the search result', ()=> {
    beforeEach('open application', () => {
        cy.openPageHome()
    })

    it('Verify filter by "indian_rhinoceros" ', ()=>{
        onFilterRhino.filterRhinoByIndianRhinoceres('indian_rhinocero')
    })
})
