import LoginPage from '../Pages/LoginPage';
const loginpg = new LoginPage();

class CreditCardPage
{

VerifyCreditCardFlow()
{

// Hover cursor on Banking menu navigation
cy.wait(2000);
cy.xpath('//button[@class="header-sidebar-trigger"]').click();
cy.wait(2000);
//cy.xpath('//span[@class="header-main-navigation-title"][text()="Banking"]').eq(0).click(); //trigger('mouseover','center'); //hover is not implemented
cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[1]/span[2]').click();
loginpg.CaptureScreenshot('Open Bank menu options');
// Click on Credit Cards link
cy.wait(2000);
cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/a/h2').click();
//cy.xpath('//a[@class="doormat-heading-link"]').eq(0).click();
cy.wait(5000);
loginpg.CaptureScreenshot('Open credit card page');

// Validate Credit Card as a header text
cy.wait(5000);
cy.xpath('//*[@id="listing_intro_hero_banner_2"]/div/h1').contains('Credit cards');
loginpg.CaptureScreenshot('Open credit card page');


// Validate Apply Now button
cy.xpath('//*[@id="listing_intro_button_1"]').should('exist');//.then((href) => {

cy.fixture('TestData.json').then((testdata)=>{
    const CardApplyUrl = testdata.CardApplyUrl;
    cy.visit(CardApplyUrl); });

// Check there are ftwo  types of Credit Card options are available
cy.wait(5000);
loginpg.CaptureScreenshot('Open credit card page');

// Validate first credit Card image attribute is HSBC Visa Cashback Credit Card

cy.xpath('//h1[text()="HSBC Cashback Credit Card"]').should('exist');

// Validate first credit Card header text is HSBC Cashback Credit Card
cy.xpath('//h1[text()="HSBC Platinum Credit Card"]').should('exist');

// Validate first credit Card has attached Apply now button
cy.xpath('//button[@class="button-primary"]').eq(0).should('exist').click();
cy.wait(5000);
loginpg.CaptureScreenshot('Open credit card page');

//applying card field validations
//cy.xpath('//h4[text()="Complete your Credit Card Application in just 3 steps"]').should('be.visible')
cy.xpath('//*[@id="fullName"]').type('a'); //single char
cy.xpath('//*[@id="mobileNo"]').type('9888888777'); 
loginpg.CaptureScreenshot('Open credit card page');
cy.wait(2000);

cy.fixture('TestData.json').then((testdata)=>{
  const fullnameSingleCharError = testdata.FullnameSingleCharError;
  // cy.get('//*[@id="nameErrMsg"]/validation-msg/div/p/span[2]/ng-transclude/text()').contains(fullnameSingleCharError);
  cy.get('#nameErrMsg').contains(fullnameSingleCharError);

});

//select kyc option
//cy.xpath('//*[@id="ekyc"]').select('eq','Yes (I will keep my Aadhaar ready)');
loginpg.CaptureScreenshot('Open credit card page');
cy.wait(2000);
cy.get("#ekyc").select(1).invoke("val").should("eq", "string:Yes (I will keep my Aadhaar ready)")

//check salaried persion check box
loginpg.CaptureScreenshot('Open credit card page');
cy.wait(2000);

cy.xpath('//*[@id="salariedChk"]').should('not.be.checked');
cy.xpath('//*[@id="salariedChk"]').check({ force: true });

loginpg.CaptureScreenshot('Open credit card page');
cy.wait(2000);

}

}
//module.exports = new LoginPage();
export default CreditCardPage;