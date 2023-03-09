
import { onFilterRhino } from '../../support/page_objects/filterRhino'

describe('Verify that when filtering by "javan_rhinoceros" in the GET action, the newly created rhino is present in the search result.', ()=> {
    beforeEach('open application', () => {
        cy.openPageHome()
    })
    
    it('Verify filter by "javan_rhinoceros"', ()=>{
        onFilterRhino.filterRhinoByJavanRhinoceres('javan_rhinoceros')
    })
})
