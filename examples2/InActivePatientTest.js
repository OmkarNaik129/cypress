/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import InActivePatient from './PageObjects/InActivePatient'
import AddPatient from './PageObjects/AddPatient'

describe('Active Patients', function() 
{
    it('Verify Search Functionality', function() 
    {
      
    const n = new InActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickInActivePatient()
    n.searchPatient('Leena')
    n.searchButton()
    
    
    })  


    it('Verify View Patient Functionality', function() 
    {
      
    const n = new InActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickInActivePatient()
    n.searchPatient('Sam')
    n.searchButton()
    n.viewPatient()
    
    
    })


    it('Verify Eidt Patient Functionality', function() 
    {
      
    const n = new InActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickInActivePatient()
    n.searchPatient('Sagar')
    n.searchButton()
    n.editPatient()
    
    })


    it('Verify "Add Patient" CTA Functionality on "Active Patient" page', function() 
    {
   
    const n = new InActivePatient()
    const p = new AddPatient()  
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickInActivePatient()
    n.clickAddPatientCTA()
    p.addPatient('Virat','Jogi','12/08/2012','1','19878900673','omtevvxx@gmail.com','Test Address2','5')
    p.submit()

    
    
    })


    it('Verify Sort Functionality', function() 
    {
      
    const n = new InActivePatient()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.clickInActivePatient()
    n.showFilter(1)
    
    })


 

})