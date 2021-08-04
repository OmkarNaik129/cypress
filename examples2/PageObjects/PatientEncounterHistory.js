class PatientEncounterHistory
{

    selectGlobalPatient(value)
    {
       cy.get('#select2-global-patients-container').click()
       const s = cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').click()
       s.type(value)
       cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('{enter}')
       .wait(3000)
 
    }
 
    clickEncounterHistory()
     {
         cy.get('.ti-menu').click()
              cy.get('#sidebarnav').contains('Patients').click()
              cy.get('#demography').click({force : true})
              cy.get('#encounter-list > div > p').click()
              .wait(3000)
     }


     viewEncounter()
     {
         cy.get('#signed-encounters > div.table-responsive > table > tbody > tr:nth-child(1) > td.actions > a:nth-child(1)').click()
         .wait(3000)
     }

     editEncounter()
     {
         cy.get('#signed-encounters > div.table-responsive > table > tbody > tr:nth-child(1) > td.actions > a:nth-child(2)').click()
         .wait(3000)
     }

     addFollowUpNote()
     {
         cy.get('#signed-encounters > div.table-responsive > table > tbody > tr:nth-child(1) > td.actions > a:nth-child(1)').click() //view encounter
         .wait(3000)
         cy.get('#blue-area > a.btn.btn-info.d-inline.float-right').click()
         cy.get('#patient-concerns').type('test')
         cy.get('#treatment-performed').type('testing')
         .wait(2000)
         cy.get('#initial-note-form > button').click()
         .wait(2000)
     }


     updateEncounter()
     {
         cy.get('#signed-encounters > div.table-responsive > table > tbody > tr:nth-child(1) > td.actions > a:nth-child(2)').click() //edit encounter
         .wait(3000)
         const b = cy.get('#preview-26905 > div > input')
         b.clear()
         b.type('New Encounter for Test')
         const k = cy.get('#preview-5708 > div > textarea')
         k.clear()
         k.type('Test Paragraph')
         cy.get('#edit-custom-encounter-form > button').click()
         .wait(3000)
     }

     deleteEncounter()
     {
         cy.get('#signed-encounters > div.table-responsive > table > tbody > tr:nth-child(4) > td.actions > a:nth-child(3) > i').click()


     }



}

export default PatientEncounterHistory