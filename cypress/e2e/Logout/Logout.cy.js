import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'
import AccountPage from '../../support/pages/AccountPage'

describe('Test Case 4: Logout User', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  const accountPage = new AccountPage()
  let userData

  it('Should logout user successfully', () => {
    // Setup: Create user data
    cy.generateUserData().then((data) => {
      userData = data
      
      // 1. Launch browser
      // 2. Navigate to url 'http://automationexercise.com'
      homePage.visit()

      // 3. Verify that home page is visible successfully
      homePage.verifyHomePageVisible()

      // 4. Click on 'Signup / Login' button
      homePage.clickSignupLogin()
      
      // Register new account for testing logout
      loginSignupPage.verifySignupVisible()
      loginSignupPage.fillSignupForm(userData.name, userData.email)
      loginSignupPage.clickSignup()
      
      accountPage.verifyAccountInfoVisible()
      accountPage.fillAccountInformation({
        title: userData.title,
        password: userData.password,
        birthDay: userData.birthDay,
        birthMonth: userData.birthMonth,
        birthYear: userData.birthYear,
        newsletter: true,
        specialOffers: true
      })
      accountPage.fillAddressInformation(userData)
      accountPage.clickCreateAccount()
      accountPage.verifyAccountCreated()
      accountPage.clickContinue()

      // 5. Verify that 'Logged in as username' is visible
      homePage.verifyLoggedInAs(userData.name)

      // 6. Click 'Logout' button
      homePage.clickLogout()

      // 7. Verify that user is navigated to login page
      cy.url().should('include', '/login')
      loginSignupPage.verifyLoginVisible()
      
      // Cleanup: Login and delete account
      loginSignupPage.fillLoginForm(userData.email, userData.password)
      loginSignupPage.clickLogin()
      homePage.verifyLoggedInAs(userData.name)
      homePage.clickDeleteAccount()
      accountPage.verifyAccountDeleted()
    })
  })
})