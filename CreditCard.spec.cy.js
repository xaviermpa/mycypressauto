import LoginPage from '../Pages/LoginPage';
import CreditCardPage from '../Pages/CreditCardPage';

const loginpg = new LoginPage();
const CreditCard = new CreditCardPage();

describe('HSBC Credit Card Flow Scenario', () => {
  beforeEach(() => {
    cy.viewport(959,660);
}),
  it('Launch HSBC Bank and verify Credit Care Page and verify apply new Card', () => {
    // Open https://www.hsbc.co.in/
    loginpg.LaunchURL();
    // Validate all fields on Apply New card page
    CreditCard.VerifyCreditCardFlow();
  })
})