class AddPatient
{    


    clickAdd()
    {
        cy.get('.ti-menu').click()
             cy.get('#sidebarnav').contains('Patients').click()
             cy.get('[href="/patients/management"]').click({force : true})
             cy.get('.four-tile').contains('Add Patient').click({force : true}) 
    }

    addPatient(value1,value2,value3,value4,value5,value6,value7,value8)
    {
        const fname= cy.get('[id="first-name"]')
        fname.clear()
        fname.type(value1)

        const lname = cy.get('[id="last-name"]')
        lname.clear()
        lname.type(value2)

        const dob = cy.get('#date-select')
        dob.clear()
        dob.type(value3)
    

        const gender=cy.get('[id="gender"]')
        gender.select(value4)

        const phone =cy.get('[name="work_phone"]')
        phone.clear()
        phone.type(value5)

        const email = cy.get('[id="email"]')
        email.clear()
        email.type(value6)

        const address = cy.get('#address')
        address.clear()
        address.type(value7)

        const state = cy.get('#state-id')
        state.select(value8)
    }

    submit()
   {
       const button = cy.get('#add-patient > div.form-body > div.form-actions.patients > button')
       button.click()
   }

    validation()
    {
        const error= cy.get('#main-wrapper > div.page-wrapper > div > div.message.error.alert.alert-danger')
        error.should('have.class', 'error')
    }
}
export default AddPatient
//Email already exists. Please use a different one.

