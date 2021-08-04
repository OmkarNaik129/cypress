/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import ActivePatient from './PageObjects/ActivePatient'
import AddPatient from './PageObjects/AddPatient'

describe('Active Patients', function() 
{
    it('Verify Search Functionality', function() 
    {
      
    const n = new ActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.searchPatient('Jack')
    n.searchButton()
    
    
    })


    it('Verify View Patient Functionality', function() 
    {
      
    const n = new ActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.searchPatient('Serina')
    n.searchButton()
    n.viewPatient()
    
    
    })


    it('Verify Eidt Patient Functionality', function() 
    {
      
    const n = new ActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.searchPatient('Gilbert')
    n.searchButton()
    n.editPatient()
    
    })


    it('Verify "Add Patient" CTA Functionality on "Active Patient" page', function() 
    {
   
    const n = new ActivePatient()
    const p = new AddPatient()  
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.clickAddPatientCTA()
    p.addPatient('Virat','Jogi','12/08/2012','1','19878900673','omtevvxx@gmail.com','Test Address2','5')
    p.submit()

    
    
    })


    it('Verify Delete Patient Functionality', function() 
    {
      
    const n = new ActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.searchPatient('Virat')
    n.searchButton()
    n.deletePatient()
    
    })


    it('Verify Sort Functionality', function() 
    {
      
    const n = new ActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickActivePatient()
    n.showFilter(1)
    
    })


 

})