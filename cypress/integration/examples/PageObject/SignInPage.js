class SignInPage{
    visit()
    {
        cy.visit(' https://www.imdb.com/')
    }

    fillEmail(value)
    {
        const field = cy.get('[type=email]')
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('[type=password]')
        field.type(value)
        return this
    }
}

export default SignInPage