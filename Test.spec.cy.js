import LoginPage from '../Pages/LoginPage';
const loginpg = new LoginPage();

describe('Verify Browser launches HSBC India Bank Site, and verify Login flow', () => {
  beforeEach(() => {
    loginpg.LaunchURL();
  }),
  it('Launch HSBC Bank and verify Home Page', () => {
    loginpg.verifyHomePage();
  }),
  it('Validate Login Page and its objects', () => {
    loginpg.ClickLogonURL();
    //loginpg.verifyLoginPage();
  })

})