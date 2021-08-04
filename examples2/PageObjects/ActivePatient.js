class ActivePatient
{
    clickActivePatient()
    {
        cy.get('.ti-menu').click()
             cy.get('#sidebarnav').contains('Patients').click()
             cy.get('[href="/patients/management"]').click({force : true})
             cy.get('.four-tile').contains('Active Patient').click({force : true}) 
    }

    searchPatient(value)
    {
        const s= cy.get('#search')
        s.type(value)

        
    }

    searchButton()
    {
        const button = cy.get('#main-wrapper > div.page-wrapper > div > div:nth-child(1) > div > form > div > span > button')
        button.click()
        .wait(3000)
    }

    viewPatient()
    {
     cy.get('#main-wrapper > div.page-wrapper > div > div.row.patients > div > div > div.card-body > div > table > tbody > tr > td.text.no-wrap > a:nth-child(1) > i').click()
     .wait(3000)
    }

    editPatient()
    {
        cy.get('#main-wrapper > div.page-wrapper > div > div.row.patients > div > div > div.card-body > div > table > tbody > tr > td.text.no-wrap > a:nth-child(2) > i').click()
        .wait(3000)
    }

    clickAddPatientCTA()
    {
        cy.get('#main-wrapper > div.page-wrapper > div > div.row.patients > div > div > div.card-header.d-table > a').click()
    }

    deletePatient()
    {
       cy.get('#main-wrapper > div.page-wrapper > div > div.row.patients > div > div > div.card-body > div > table > tbody > tr:nth-child(1) > td.text.no-wrap > a:nth-child(4) > i').click()
    
    }

    
    showFilter(value)
    {
        switch(value)
        {
            case 0:
               cy.get('#page-filter').select('Show 10 entries')
               break;
            case 1:
               cy.get('#page-filter').select('Show 25 entries')
               break;
            case 2:
               cy.get('#page-filter').select('Show 50 entries')
               break;
            case 3:
               cy.get('#page-filter').select('Show 100 entries')
               break;

        }
    }

}

export default ActivePatient