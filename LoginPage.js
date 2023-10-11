class LoginPage
{

//launch hsbc url from testdata fixture json file
LaunchURL()
{
    cy.fixture('TestData.json').then((testdata)=>{
        const baseurl = testdata.BaseURL;
        cy.visit(baseurl);
        cy.screenshot();
        });
}
//ensure home page is visible
verifyHomePage()
{
    cy.xpath('//h1/img').screenshot();
    cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
}

//launch hsbc url from testdata fixture json file
ClickLogonURL()
{
    cy.fixture('TestData.json').then((testdata)=>{
        const logonURL = testdata.LogonURL;
        cy.visit(logonURL);
        cy.screenshot();
        });
}

verifyLoginPage()
{
    
 
}


}
//module.exports = new LoginPage();
export default LoginPage;