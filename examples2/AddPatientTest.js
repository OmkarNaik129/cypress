
/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import AddPatient from './PageObjects/AddPatient'

describe('Add Patients', function() 
{
    it('Add New Patient', function() 
    {
      
    const n = new AddPatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickAdd()
    n.addPatient('Somesh','Jogi','12/08/2012','1','19876700673','omtesbt89567567@gmail.com','Test Address2','5')
    n.submit()



    })

  /*  it('Verify if same patient can be added again', function() 
    {
      
    const n = new AddPatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickAdd()
    n.addPatient('Somesh','Jogi','12/08/2012','1','19876700673','omtesbt89567567@gmail.com','Test Address2','5')
    n.submit()
    n.validation
    })

  */

   

})