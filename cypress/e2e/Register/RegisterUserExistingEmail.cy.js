import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'

describe('Test Case 5: Register User with existing email', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  let userData

  before(() => {
    // Create a user first
    cy.generateUserData().then((data) => {
      userData = data
      cy.registerUser(userData)
      // Logout after registration
      homePage.clickLogout()
    })
  })

  after(() => {
    // Cleanup: Delete account
    cy.loginUser(userData.email, userData.password)
    cy.deleteAccount()
  })

  it('Should show error when registering with existing email', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Signup / Login' button
    homePage.clickSignupLogin()

    // 5. Verify 'New User Signup!' is visible
    loginSignupPage.verifySignupVisible()

    // 6. Enter name and email address (existing email)
    loginSignupPage.fillSignupForm(userData.name, userData.email)

    // 7. Click 'Signup' button
    loginSignupPage.clickSignup()

    // 8. Verify error 'Email Address already exist!' is visible
    loginSignupPage.verifySignupError()
  })
})
