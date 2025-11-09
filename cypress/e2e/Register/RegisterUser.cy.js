import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'
import AccountPage from '../../support/pages/AccountPage'

describe('Test Case 1: Register User', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  const accountPage = new AccountPage()
  let userData

  before(() => {
    cy.generateUserData().then((data) => {
      userData = data
    })
  })

  it('Should register a new user successfully', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Signup / Login' button
    homePage.clickSignupLogin()

    // 5. Verify 'New User Signup!' is visible
    loginSignupPage.verifySignupVisible()

    // 6. Enter name and email address
    loginSignupPage.fillSignupForm(userData.name, userData.email)

    // 7. Click 'Signup' button
    loginSignupPage.clickSignup()

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    accountPage.verifyAccountInfoVisible()

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    accountPage.fillAccountInformation({
      title: userData.title,
      password: userData.password,
      birthDay: userData.birthDay,
      birthMonth: userData.birthMonth,
      birthYear: userData.birthYear,
      newsletter: userData.newsletter,
      specialOffers: userData.specialOffers
    })

    // 10. Fill details: First name, Last name, Company, Address, Country, State, City, Zipcode, Mobile Number
    accountPage.fillAddressInformation(userData)

    // 11. Click 'Create Account button'
    accountPage.clickCreateAccount()

    // 12. Verify that 'ACCOUNT CREATED!' is visible
    accountPage.verifyAccountCreated()

    // 13. Click 'Continue' button
    accountPage.clickContinue()

    // 14. Verify that 'Logged in as username' is visible
    homePage.verifyLoggedInAs(userData.name)

    // 15. Click 'Delete Account' button
    homePage.clickDeleteAccount()

    // 16. Verify that 'ACCOUNT DELETED!' is visible
    accountPage.verifyAccountDeleted()

    // 17. Click 'Continue' button
    accountPage.clickContinue()
  })
})