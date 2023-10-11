class LoginPage
{

//launch hsbc url from testdata fixture json file
LaunchURL()
{
    //Open https://www.hsbc.co.in/
    cy.fixture('TestData.json').then((testdata)=>{
        const baseurl = testdata.BaseURL;
        cy.visit(baseurl);
        cy.screenshot();
        });
}
//ensure home page is visible
verifyHomePage()
{
    //Validate HSBC Bank Logo
    cy.xpath('//h1/img').screenshot();
    //Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and deposit
    cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
}

//launch hsbc url from testdata fixture json file
ClickLogonURL()
{
    //Click on Login button - however button not visible in unix o/s hence navigate to login page using url passed from fixture
    cy.fixture('TestData.json').then((testdata)=>{
        const logonURL = testdata.LogonURL;
        cy.visit(logonURL);
        cy.screenshot();
        });

}

verifyLoginPage()
{
    //Validate Log On header in Login page
    cy.xpath('//h2/span[text()=" Log On   "]').should('exist');
    //Check Continue button is available
    cy.xpath('//button/span[text()=" Continue "]').should('exist');
    //Also validate error message under username box when  Continue button is cliced without username entered
    cy.xpath('//button/span[text()=" Continue "]').click();
    cy.wait(3000);
    cy.xpath('//*[@id="errUsername"]/div/div[2]/text()').should('have.text',' You must provide your username.');    
    //Type any random email in the username field - usrname read from testdata.json file
    //read test data - username
    cy.fixture('TestData.json').then((testdata)=>{
        const usrname = testdata.UserName;
        cy.xpath('//*[@id="username"]').type(usrname);
    });
    //Validate Remember me check box is not checked by default
    cy.xpath('//*[@id="rememberMe"]').should('be.unchecked');  
    //Validate there is a question mark tooltip present on the page
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('exist');
    //Click on the tooltip
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').click();    
    //Now validate the username header in the new pop-up screen
    cy.wait(3000);
    cy.xpath('//*[@id="help_content_1"]/h3/span').should('exist');
    //Validate there is a Close button in the new pop-up screen
    cy.xpath('//*[@id="Close_dob_exception"]').should('exist');
    //Click on the close button present in the new pop-up screen
    cy.xpath('//*[@id="Close_dob_exception"]').click();
}

}
//module.exports = new LoginPage();
export default LoginPage;