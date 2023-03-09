export class FilterRhino {

   filterRhinoByIndianRhinoceres(species) {

      cy.get('.rhino-inputs form').then(form => {

         cy.wrap(form).eq(1).find('[id="create_rhino_species"]').type(species)
         cy.wrap(form).eq(1).find('button').click()
      })

      cy.get('table').then(table => {
         expect(cy.wrap(table)).not.to.equal('javan_rhinoceros')
         expect(cy.wrap(table)).not.to.equal('Clyde500')
      })

   }

   filterRhinoByJavanRhinoceres(species) {

      cy.get('.rhino-inputs form').then(form => {
         cy.wrap(form).eq(1).find('[id="create_rhino_species"]').type(species)
         cy.wrap(form).eq(1).find('button').click()
      })
      cy.get('table').should('contain', 'Clyde500').and('contain', species)
   }



}

export const onFilterRhino = new FilterRhino()