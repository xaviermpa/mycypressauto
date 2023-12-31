import LoginPage from '../Pages/LoginPage';
const loginpg = new LoginPage();

describe('HSBC Login Test Scenario', () => {
  beforeEach(() => {
    cy.viewport(959,660);
}),
  it('Launch HSBC Bank and verify Home Page', () => {
    loginpg.LaunchURL();
    loginpg.verifyHomePage();
  }),
  it('Validate Login Page and its objects', () => {
    loginpg.LaunchURL();
    loginpg.ClickLogonURL();
    loginpg.verifyLoginPage();
  })

})