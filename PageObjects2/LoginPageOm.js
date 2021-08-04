/// <reference types="cypress" />


class LoginPage
{
   visit()
   {
       cy.visit('https://admin-demo.nopcommerce.com/login')
   }


   fillEmail(value)
   {
       const field = cy.get('#Email')
       field.clear()
       field.type(value)
       return this
   }
   
   fillPassword(value)
   {
       const field = cy.get('#Password')
       field.clear()
       field.type(value)
       return this
   }

   submit()
   {
       const button = cy.get('[type=submit]')
       button.click()
   }

}

export default LoginPage