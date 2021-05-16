describe('TvNews_suite', () => {
    it('User can follow Tv news', () => {
      cy.visit(' https://www.imdb.com/')
      cy.get("#imdbHeader-navDrawerOpen").click()
      cy.viewport(1600,600)
      cy.get("div:nth-child(1) > span > div > div > ul > a:nth-child(6)").click({force: true})
      cy.title().should('eq','TV News - IMDb')
    })
  })