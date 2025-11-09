class ContactUsPage {
  elements = {
    getInTouchTitle: () => cy.get('.contact-form h2'),
    nameInput: () => cy.get('[data-qa="name"]'),
    emailInput: () => cy.get('[data-qa="email"]'),
    subjectInput: () => cy.get('[data-qa="subject"]'),
    messageInput: () => cy.get('[data-qa="message"]'),
    uploadFileInput: () => cy.get('input[name="upload_file"]'),
    submitButton: () => cy.get('[data-qa="submit-button"]'),
    successMessage: () => cy.get('.status.alert-success'),
    homeButton: () => cy.get('#form-section .btn.btn-success')
  }

  verifyGetInTouchVisible() {
    this.elements.getInTouchTitle()
      .should('be.visible')
      .and('contain', 'Get In Touch')
  }

  fillContactForm(contactData) {
    this.elements.nameInput().type(contactData.name)
    this.elements.emailInput().type(contactData.email)
    this.elements.subjectInput().type(contactData.subject)
    this.elements.messageInput().type(contactData.message)
  }

  uploadFile(fileName) {
    this.elements.uploadFileInput().selectFile(fileName)
  }

  clickSubmit() {
    this.elements.submitButton().click()
  }

  acceptAlert() {
    cy.on('window:confirm', () => true)
  }

  verifySuccessMessage() {
    this.elements.successMessage()
      .should('be.visible')
      .and('contain', 'Success! Your details have been submitted successfully.')
  }

  clickHome() {
    this.elements.homeButton().click()
  }
}

export default ContactUsPage
