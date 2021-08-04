/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import PatientInformation from './PageObjects/PatientInformation'


describe('Patient Information', function() 
{
    it('Verify View Patient Information functionality', function() 
    {
      
    const n = new PatientInformation()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickPatientInformation()
   
    })



    it('Verify Edit CTA on Patient Information page', function() 
    {
      
    const n = new PatientInformation()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickPatientInformation()
    n.editInformation()
   
    
    
    })





})