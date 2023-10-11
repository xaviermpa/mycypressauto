import LoginPage from '../Pages/LoginPage';
import ATMSearchPage from '../Pages/ATMSearchPage';

const loginpg = new LoginPage();
const ATMSearch = new ATMSearchPage();

describe('HSBC Login Test Scenario', () => {
  beforeEach(() => {
    cy.viewport(959,660);
}),
  it('Launch HSBC Bank and verify Home Page', () => {
    // Open https://www.hsbc.co.in/
    loginpg.LaunchURL();
    // Validate all fields on ATM Search page
    ATMSearch.VerifyATMSearchPage();
  })
})