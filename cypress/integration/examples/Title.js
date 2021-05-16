describe('Title_suite', () => {
    it('Verify title of the page-positive', () => {
      cy.visit(' https://www.imdb.com/')
      cy.title().should('eq','IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows')
    })
  })