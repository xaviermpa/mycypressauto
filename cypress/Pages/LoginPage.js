class LoginPage
{


LaunchURL()
{
    cy.fixture('TestData.json').then((testdata)=>{
        const baseurl = testdata.BaseURL;
        cy.visit(baseurl);
        });
}


verifyHomePage()
{
    return cy.get('h1').should('have.text', 'CURA Healthcare Service');
}

}
//module.exports = new LoginPage();
export default LoginPage;