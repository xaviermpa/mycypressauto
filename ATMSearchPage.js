import LoginPage from '../Pages/LoginPage';
const loginpg = new LoginPage();

class ATMSearchPage
{

VerifyATMSearchPage()
{    
//  Click on Find your nearest branch or ATM link in footer section
   cy.xpath('//button[@class="header-sidebar-trigger"]').click();
   loginpg.CaptureScreenshot('open menu option');
   cy.xpath('//*[@id="sidebar"]/div/ul/li[8]/div/span[2]').click();
   loginpg.CaptureScreenshot('open help support option');
   cy.xpath('//*[@id="sidebar"]/div/div[3]/ul[1]/li[2]/a').click();
   loginpg.CaptureScreenshot('menu option');  
   // Validate in new page the URL has String = ‘/ways-to-bank/branches/’

   cy.url().should('contains', '/ways-to-bank/branches/');
   loginpg.CaptureScreenshot('open menu option');

   //Validate Header as Branches & ATM
   cy.wait(3000);
   cy.xpath('//*[@id="content_intro_hero_banner_2"]/div/h1').contains('Branches & ATMs');
   loginpg.CaptureScreenshot('open menu option');
    
    //Click on before Branch & ATM Locator button
    cy.xpath('//*[@id="content_main_button_1"]/span[1]').click();
    loginpg.CaptureScreenshot('open menu option');

    //Type country name as India
    cy.wait(5000);
    cy.xpath('//*[@id="searchInput"]').type('India');
    cy.wait(5000);
    loginpg.CaptureScreenshot('open menu option');

    //In drop-down option click option India
    cy.xpath('//*[@id="PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc"]').click();
    loginpg.CaptureScreenshot('open menu option');

    //Validate ATM Header name is showing as Rajbhavan Road
    cy.wait(3000);
    cy.xpath('//button[@class="jAgR1vyHAyAVW7gdvNl5r"]/h2[text()="Rajbhavan Road"]').should('exist');
    loginpg.CaptureScreenshot('open menu option');
    
//Click on add Show more results button
cy.xpath('//button[@class="A-BTN _3ONnGxq1xmZZ3J68sha5PJ _3VOnY-qV7atMV73oAncmTd"]').should('exist').click();
loginpg.CaptureScreenshot('open menu option');

//Check second ATM branch name tooltip as 2 in red color is getting displayed
cy.xpath('//button[@class="jAgR1vyHAyAVW7gdvNl5r"]/p[1]/span/span[text()="2"]').should('exist').click();
loginpg.CaptureScreenshot('open menu option');

//Check Instagram in social media option in footer section
cy.scrollTo('bottom');
cy.viewport(960,660);
cy.wait(3000);
cy.xpath('//*[@id="hp_socialmediafooterlink_1"]').should('be.visible');
loginpg.CaptureScreenshot('open menu option');

//Check Facebook in social media option in footer section
cy.xpath('//*[@id="hp_socialmediafooterlink_2"]').should('exist');
loginpg.CaptureScreenshot('open menu option');

//Check Twitter in social media option in footer section
cy.xpath('//*[@id="hp_socialmediafooterlink_3"]').should('exist');
loginpg.CaptureScreenshot('open menu option');

//Check Youtube in social media option in footer section
cy.xpath('//*[@id="hp_socialmediafooterlink_4"]').should('exist');
loginpg.CaptureScreenshot('open menu option');

//Click on HSBC Logo
cy.wait(3000);
cy.xpath('//div[@class="header-logo lg-2"]/a').click();
loginpg.CaptureScreenshot('open menu option');

//Validate page is navigating to home page by its title
cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
loginpg.CaptureScreenshot('open menu option');

//Scroll down to the bottom
cy.scrollTo('bottom');
loginpg.CaptureScreenshot('open menu option');

//Check and Click on Privacy link
cy.xpath('//nav/ul/li[3]/a[text()="Privacy Statement"]').click();
loginpg.CaptureScreenshot('open menu option');

//Validate Privacy Statement as Header
cy.xpath('//*[@id="content_intro_hero_no_image_1"]/h1').contains('Privacy Statement');
loginpg.CaptureScreenshot('open menu option');

}

}
//module.exports = new LoginPage();
export default ATMSearchPage;