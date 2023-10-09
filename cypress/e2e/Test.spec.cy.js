import LoginPage from '../Pages/LoginPage';
const loginpg = new LoginPage();

describe('Verify Browser launches Healthcare Service App', () => {
  it('Test Launch Healthcare App', () => {
    //loginpg.getTestData();
    loginpg.LaunchURL();
    loginpg.verifyHomePage();
    //loginpg.OpenMenu();
    //cy.visit('https://katalon-demo-cura.herokuapp.com/');
    //cy.get('h1').should('have.text','CURA Healthcare Service');
    //loginpg.verifyHomePage;
    // homePage.hcMenulnkclk();
  })

})