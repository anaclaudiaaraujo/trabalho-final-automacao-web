import HomePage from '../../support/pages/HomePage'
import ContactUsPage from '../../support/pages/ContactUsPage'

describe('Test Case 6: Contact Us Form', () => {
  const homePage = new HomePage()
  const contactUsPage = new ContactUsPage()
  let contactData

  before(() => {
    cy.generateContactData().then((data) => {
      contactData = data
    })
  })

  it('Should submit contact us form successfully', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Contact Us' button
    homePage.clickContactUs()

    // 5. Verify 'GET IN TOUCH' is visible
    contactUsPage.verifyGetInTouchVisible()

    // 6. Enter name, email, subject and message
    contactUsPage.fillContactForm(contactData)

    // 7. Upload file
    contactUsPage.uploadFile('cypress/fixtures/test-file.txt')

    // 8. Click 'Submit' button
    contactUsPage.clickSubmit()

    // 9. Click OK button
    contactUsPage.acceptAlert()

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    contactUsPage.verifySuccessMessage()

    // 11. Click 'Home' button and verify that landed to home page successfully
    contactUsPage.clickHome()
    homePage.verifyHomePageVisible()
  })
})