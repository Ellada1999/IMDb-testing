describe('ReleaseCalendar_suite', () => {
    it('User can follow release calendars', () => {
      cy.visit(' https://www.imdb.com/')
      cy.get("#imdbHeader-navDrawerOpen").click()
      cy.viewport(1600,600)
      cy.get("div:nth-child(2) > span > div > div > ul > a:nth-child(1)").click({force: true})
      cy.title().should('eq','IMDb: Upcoming Releases for United States - IMDb')
    })
  })