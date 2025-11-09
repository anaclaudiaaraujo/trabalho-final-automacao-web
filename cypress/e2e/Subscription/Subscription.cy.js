import HomePage from '../../support/pages/HomePage'

describe('Test Case 10: Verify Subscription in home page', () => {
  const homePage = new HomePage()

  it('Should verify subscription in home page', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Scroll down to footer
    homePage.scrollToFooter()

    // 5. Verify text 'SUBSCRIPTION'
    homePage.verifySubscriptionVisible()

    // 6. Enter email address in input and click arrow button
    cy.generateUserData().then((userData) => {
      homePage.fillSubscriptionEmail(userData.email)
      homePage.clickSubscribe()

      // 7. Verify success message 'You have been successfully subscribed!' is visible
      homePage.verifySubscriptionSuccess()
    })
  })
})