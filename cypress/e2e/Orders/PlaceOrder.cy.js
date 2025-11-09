import HomePage from '../../support/pages/HomePage'
import LoginSignupPage from '../../support/pages/LoginSignupPage'
import AccountPage from '../../support/pages/AccountPage'
import CartPage from '../../support/pages/CartPage'
import CheckoutPage from '../../support/pages/CheckoutPage'

describe('Test Case 15: Place Order: Register before Checkout', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  const accountPage = new AccountPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()
  let userData
  let paymentData

  before(() => {
    cy.generateUserData().then((data) => {
      userData = data
    })
    cy.generatePaymentData().then((data) => {
      paymentData = data
    })
  })

  it('Should place order after registering', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click 'Signup / Login' button
    homePage.clickSignupLogin()

    // 5. Fill all details in Signup and create account
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

    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    accountPage.verifyAccountCreated()
    accountPage.clickContinue()

    // 7. Verify 'Logged in as username' at top
    homePage.verifyLoggedInAs(userData.name)

    // 8. Add products to cart
    cy.addProductsToCart(2)

    // 9. Click 'Cart' button - Already in cart page from command
    // 10. Verify that cart page is displayed
    cartPage.verifyCartPageDisplayed()

    // 11. Click Proceed To Checkout
    cartPage.clickProceedToCheckout()

    // 12. Verify Address Details and Review Your Order
    checkoutPage.verifyAddressDetails()
    checkoutPage.verifyReviewOrder()

    // 13. Enter description in comment text area and click 'Place Order'
    checkoutPage.fillCommentAndPlaceOrder('This is a test order via automation')

    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    checkoutPage.fillPaymentDetails(paymentData)

    // 15. Click 'Pay and Confirm Order' button
    checkoutPage.clickPayAndConfirm()

    // 16. Verify success message 'Your order has been placed successfully!'
    checkoutPage.verifyOrderSuccess()

    // 17. Click 'Delete Account' button
    homePage.clickDeleteAccount()

    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    accountPage.verifyAccountDeleted()
    accountPage.clickContinue()
  })
})