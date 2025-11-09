class AccountPage {
  elements = {
    // Account Information
    accountInfoTitle: () => cy.get('.title.text-center b'),
    titleMr: () => cy.get('#id_gender1'),
    titleMrs: () => cy.get('#id_gender2'),
    password: () => cy.get('[data-qa="password"]'),
    days: () => cy.get('[data-qa="days"]'),
    months: () => cy.get('[data-qa="months"]'),
    years: () => cy.get('[data-qa="years"]'),
    newsletter: () => cy.get('#newsletter'),
    specialOffers: () => cy.get('#optin'),
    
    // Address Information
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    company: () => cy.get('[data-qa="company"]'),
    address: () => cy.get('[data-qa="address"]'),
    address2: () => cy.get('[data-qa="address2"]'),
    country: () => cy.get('[data-qa="country"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    mobileNumber: () => cy.get('[data-qa="mobile_number"]'),
    
    // Buttons
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    
    // Success messages
    accountCreatedTitle: () => cy.get('[data-qa="account-created"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
    accountDeletedTitle: () => cy.get('[data-qa="account-deleted"]')
  }

  verifyAccountInfoVisible() {
    this.elements.accountInfoTitle()
      .should('be.visible')
      .and('contain', 'Enter Account Information')
  }

  fillAccountInformation(accountData) {
    // Title
    if (accountData.title === 'Mr') {
      this.elements.titleMr().check()
    } else {
      this.elements.titleMrs().check()
    }
    
    // Password
    this.elements.password().type(accountData.password)
    
    // Date of birth
    this.elements.days().select(accountData.birthDay)
    this.elements.months().select(accountData.birthMonth)
    this.elements.years().select(accountData.birthYear)
    
    // Checkboxes
    if (accountData.newsletter) {
      this.elements.newsletter().check()
    }
    if (accountData.specialOffers) {
      this.elements.specialOffers().check()
    }
  }

  fillAddressInformation(addressData) {
    this.elements.firstName().type(addressData.firstName)
    this.elements.lastName().type(addressData.lastName)
    
    if (addressData.company) {
      this.elements.company().type(addressData.company)
    }
    
    this.elements.address().type(addressData.address)
    
    if (addressData.address2) {
      this.elements.address2().type(addressData.address2)
    }
    
    this.elements.country().select(addressData.country)
    this.elements.state().type(addressData.state)
    this.elements.city().type(addressData.city)
    this.elements.zipcode().type(addressData.zipcode)
    this.elements.mobileNumber().type(addressData.mobileNumber)
  }

  clickCreateAccount() {
    this.elements.createAccountButton().click()
  }

  verifyAccountCreated() {
    this.elements.accountCreatedTitle()
      .should('be.visible')
      .and('contain', 'Account Created!')
  }

  clickContinue() {
    this.elements.continueButton().click()
  }

  verifyAccountDeleted() {
    this.elements.accountDeletedTitle()
      .should('be.visible')
      .and('contain', 'Account Deleted!')
  }
}

export default AccountPage
