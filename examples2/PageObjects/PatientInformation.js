class PatientInformation
{

   selectGlobalPatient(value)
   {
      cy.get('#select2-global-patients-container').click()
      const s = cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').click()
      s.type(value)
      cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('{enter}')
      .wait(3000)

   }

   clickPatientInformation()
    {
        cy.get('.ti-menu').click()
             cy.get('#sidebarnav').contains('Patients').click()
             cy.get('#demography').click({force : true})
             cy.get('#patient-info > div > p').click()
             .wait(3000)
    }


    editInformation()
    {
        cy.get('#patient-view > div > div > div.card-header.d-table > a').click()
        .wait(3000)
    }






}

export default PatientInformation