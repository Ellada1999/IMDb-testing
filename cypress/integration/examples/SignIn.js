import SignInPage from './PageObject/SignInPage'

describe('SignIn_suite', () => {
  const lp=new SignInPage()
    it('User is able to signin with valid credentials', () => {
      lp.visit()
      cy.get(" .imdb-header__signin-text").click()
      cy.get("#signin-options > div > div:nth-child(2) > a:nth-child(1)").click()
        //cy.get("[type=email]").type("ellamuradyan1999@mail.ru")
        lp.fillEmail("ellamuradyan1999@mail.ru")
        //cy.get("[type=password]").type("esdebilemiskdudebiles")
        lp.fillPassword("esdebilemiskdudebiles")
      cy.get("#signInSubmit").click();
    }) 
    
    it('User is able to signin with Amazon', () => {
         lp.visit()
        cy.get(" .imdb-header__signin-text").click()
        cy.get("#signin-options > div > div:nth-child(2) > a:nth-child(2)").click()
        cy.title().should('eq','Amazon.com Sign-In')
        
    
     })

      it('User is able to signin with Facebook', () => {
        lp.visit()
        cy.get(" .imdb-header__signin-text").click()
        cy.get("#signin-options > div > div:nth-child(2) > a:nth-child(3)").click()
        cy.title().should('eq','Войдите на Facebook | Facebook')
      })

  })