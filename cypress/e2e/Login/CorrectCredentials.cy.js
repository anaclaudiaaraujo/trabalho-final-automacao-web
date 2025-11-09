import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'
import AccountPage from '../../support/pages/AccountPage'

describe('Test Case 2: Login User with correct email and password', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  const accountPage = new AccountPage()
  let userData

  it('Should login user with correct credentials', () => {
    // Setup: Create a user first
    cy.generateUserData().then((data) => {
      userData = data
      
      // 1. Launch browser
      // 2. Navigate to url 'http://automationexercise.com'
      homePage.visit()

      // 3. Verify that home page is visible successfully
      homePage.verifyHomePageVisible()

      // 4. Click on 'Signup / Login' button
      homePage.clickSignupLogin()
      
      // Register new account
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
      
      // Logout to test login
      cy.get('a[href="/logout"]', { timeout: 10000 }).should('be.visible').click()
      cy.url().should('include', '/login')

      // 5. Verify 'Login to your account' is visible
      loginSignupPage.verifyLoginVisible()

      // 6. Enter correct email address and password
      loginSignupPage.fillLoginForm(userData.email, userData.password)

      // 7. Click 'login' button
      loginSignupPage.clickLogin()

      // 8. Verify that 'Logged in as username' is visible
      homePage.verifyLoggedInAs(userData.name)
      
      // 9. Click 'Delete Account' button
      homePage.clickDeleteAccount()

      // 10. Verify that 'ACCOUNT DELETED!' is visible
      accountPage.verifyAccountDeleted()
    })
  })
})