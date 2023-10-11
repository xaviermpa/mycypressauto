class CreditCardPage
{

CaptureScreenshot(scenario)
{
            cy.screenshot(scenario, {
            clip: { x: 0, y: 0, width: 1000, height: 700 }
          });
}

}
//module.exports = new LoginPage();
export default CreditCardPage;