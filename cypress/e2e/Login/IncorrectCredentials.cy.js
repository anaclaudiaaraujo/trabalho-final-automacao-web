import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'

describe('Test Case 3: Login User with incorrect email and password', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()

  it('Should show error message when login with incorrect credentials', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Signup / Login' button
    homePage.clickSignupLogin()

    // 5. Verify 'Login to your account' is visible
    loginSignupPage.verifyLoginVisible()

    // 6. Enter incorrect email address and password
    loginSignupPage.fillLoginForm('invalid@email.com', 'wrongpassword123')

    // 7. Click 'login' button
    loginSignupPage.clickLogin()

    // 8. Verify error 'Your email or password is incorrect!' is visible
    loginSignupPage.verifyLoginError()
  })
})