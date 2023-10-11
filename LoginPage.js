class LoginPage
{

CaptureScreenshot(scenario)
{
            cy.screenshot(scenario, {
            clip: { x: 0, y: 0, width: 1000, height: 700 }
          });
}    

//launch hsbc url from testdata fixture json file
LaunchURL()
{
    //Open https://www.hsbc.co.in/
    cy.fixture('TestData.json').then((testdata)=>{
        const baseurl = testdata.BaseURL;
        cy.visit(baseurl);
    });
    this.CaptureScreenshot('Logged into hsbc');
}
//ensure home page is visible
verifyHomePage()
{
    //Validate HSBC Bank Logo
    cy.xpath('//h1/img');
    //Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and deposit
    cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    this.CaptureScreenshot('verified home page');
}

//launch hsbc url from testdata fixture json file
ClickLogonURL()
{
    // cy.fixture('TestData.json').then((testdata)=>{
    //     const logonURL = testdata.LogonURL;
    //     cy.visit(logonURL);
    //     cy.screenshot();
    //     });
    cy.xpath('//div[3]/a[@class="selected-item login-button only-one-link"]').click({force: true});
    this.CaptureScreenshot('verified log on button');    
}

verifyLoginPage()
{
    //Validate Log On header in Login page
    cy.xpath('//h2/span[text()=" Log On   "]').should('exist');
    this.CaptureScreenshot('verified log on screen');
    //Check Continue button is available
    cy.xpath('//button/span[text()=" Continue "]').should('exist');
    //validate continue button should be disabled
    cy.xpath('//*[@id="username_submit_btn"]').should('be.disabled');
    cy.xpath('//*[@id="username"]').focus();
    cy.xpath('//*[@id="rememberMe"]').focus();
    cy.wait(3000);
    cy.xpath('//*[@id="errUsername"]/div/div[2]/text()').should('have.text',' You must provide your username.'); 
    this.CaptureScreenshot('verified log page fields');   
    //Type any random email in the username field - usrname read from testdata.json file
    //read test data - username
    cy.fixture('TestData.json').then((testdata)=>{
        const usrname = testdata.UserName;
        cy.xpath('//*[@id="username"]').type(usrname);
    });
    this.CaptureScreenshot('Entered user name');
    //Validate Remember me check box is not checked by default
    cy.xpath('//*[@id="rememberMe"]').should('not.be.checked');  
    //Validate there is a question mark tooltip present on the page
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('exist');
    //Click on the tooltip
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').click();    
    //Now validate the username header in the new pop-up screen
    cy.wait(3000);
    this.CaptureScreenshot('verified tool tip');
    cy.xpath('//*[@id="help_content_1"]/h3/span').should('exist');
    //Validate there is a Close button in the new pop-up screen
    if(cy.xpath('//*[@id="Close_dob_exception"]').should('be.visible'))
    {
        cy.xpath('//*[@id="Close_dob_exception"]').click();
    }
    else
    {
        //Click on the close X present in the new pop-up screen
        cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').click();
     }
     this.CaptureScreenshot('after closing tool tip');
}
}
//module.exports = new LoginPage();
export default LoginPage;