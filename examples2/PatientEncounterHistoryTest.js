/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import PatientEncounterHistory from './PageObjects/PatientEncounterHistory'

describe('Patient Encounter History', function() 
{
    it('Verify View Encounter functionality', function() 
    {
      
    const n = new PatientEncounterHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickEncounterHistory()
    n.viewEncounter()
   
    })


    it('Verify Edit Encounter functionality', function() 
    {
      
    const n = new PatientEncounterHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickEncounterHistory()
    n.editEncounter()
   
    })

    it('Verify Add Follow Up Note functionality', function() 
    {
      
    const n = new PatientEncounterHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickEncounterHistory()
    n.addFollowUpNote()
   
    })


    it('Verify Update Encounter functionality', function() 
    {
      
    const n = new PatientEncounterHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickEncounterHistory()
    n.updateEncounter()
   
    })

    it('Verify Delete Encounter functionality', function() 
    {
      
    const n = new PatientEncounterHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickEncounterHistory()
    n.deleteEncounter()
   
    })






    




})